import type { AstroIntegration } from 'astro';
import fs from 'fs';
import type { IndexEntry } from '@/utils/search.ts';

type PathEntry = {
  path: string;
  title: string;
};

export type TreeNode = {
  path: string;
  title: string;
  children: Record<string, TreeNode>;
};

function createSitemapTree(entries: PathEntry[]): TreeNode {
  const sortedEntries = [...entries].sort((a, b) => a.path.length - b.path.length);

  const root: TreeNode = {
    path: '',
    title: 'Root',
    children: {},
  };

  for (const entry of sortedEntries) {
    if (entry.path === '') {
      root.title = entry.title;
      continue;
    }

    const segments = entry.path.split('/').filter(Boolean);

    let currentNode = root;
    let currentPath = '';

    for (let i = 0; i < segments.length; i++) {
      const segment = segments[i];
      currentPath += '/' + segment;

      if (!currentNode.children[segment]) {
        currentNode.children[segment] = {
          path: currentPath,
          title: i === segments.length - 1 ? entry.title : segment,
          children: {},
        };
      }

      if (i === segments.length - 1) {
        currentNode.children[segment].title = entry.title;
      }

      currentNode = currentNode.children[segment];
    }
  }

  return root;
}

export function generateSitemap(): AstroIntegration {
  return {
    name: 'generate-sitemap',
    hooks: {
      'astro:build:setup': async () => {
        const searchIndex = fs.readFileSync('./src/assets/search-index.json', 'utf-8');
        const pages = JSON.parse(searchIndex).entries.map((entry: IndexEntry) => ({
          path: entry.path,
          title: entry.title,
        }));

        const sitemapTree = createSitemapTree(pages);

        fs.writeFileSync('./src/assets/sitemap.json', JSON.stringify(sitemapTree, null, 2));
      },
    },
  };
}
