import { parse } from '@astrojs/compiler';
import fs from 'fs';
import path from 'path';
import type { AstroIntegration } from 'astro';

export type IndexEntry = {
  path: string;
  title: string;
  content: string;
  keywords: string[];
};

export type SearchIndex = {
  entries: IndexEntry[];
};

export type SearchResult = {
  title: string;
  description: string;
  url: string;
};

const getFilesRecursive = (dir: string): string[] => {
  const files = fs.readdirSync(dir);
  let fileList: string[] = [];

  for (const file of files) {
    const filePath = path.join(dir, file);

    if (fs.statSync(filePath).isDirectory()) {
      fileList = [...fileList, ...getFilesRecursive(filePath)];
    } else {
      fileList.push(filePath);
    }
  }

  return fileList;
};

type ExtractedContent = {
  title: string;
  textContent: string[];
};

const extractTextContent = (node: Record<string, any>): ExtractedContent => {
  const textContent: string[] = [];
  let title = '';

  if (node.name === 'script' || node.name === 'head') {
    return { title, textContent };
  }

  if (node.name === 'h1') {
    const h1Content = node.children
      ?.filter((child: any) => child.type === 'text')
      .map((child: any) => child.value.trim())
      .join(' ');

    if (h1Content) {
      title = h1Content;
    }
  }

  if (node.type === 'text' && node.value) {
    const cleanText = node.value.trim();
    if (cleanText) {
      textContent.push(cleanText);
    }
  }

  if (node.children) {
    node.children.forEach((child: any) => {
      const childContent = extractTextContent(child);
      if (childContent.title) {
        title = childContent.title;
      }
      textContent.push(...childContent.textContent);
    });
  }

  return { title, textContent };
};

const compileAstroFile = async (filePath: string) => {
  const content = fs.readFileSync(filePath, 'utf8');
  const result = await parse(content);
  const { title, textContent } = extractTextContent(result.ast);

  return {
    path: filePath,
    title,
    content: textContent,
  };
};

const normalizeText = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^a-zа-я0-9\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
};

const tokenize = (text: string) => {
  const normalized = normalizeText(text);

  const words = normalized
    .split(' ')
    .filter((word) => word.length > 2 && !['and', 'the', 'for', 'или', 'для', 'что', 'как', 'при'].includes(word));

  return [...new Set(words)];
};

const createSearchIndex = (files: { path: string; title: string; content: string[] }[]): SearchIndex => {
  const index: SearchIndex = {
    entries: [],
  };

  files.forEach((file) => {
    const content = file.content.join(' ');

    let filePath = file.path.replace(/\\/g, '/').replace('src/pages/', '/').replace('.astro', '');

    if (filePath.endsWith('/index')) {
      filePath = filePath.slice(0, -6);
    }

    const entry: IndexEntry = {
      path: filePath,
      title: file.title || path.basename(file.path, '.astro'),
      content: content.slice(0, 200) + '...',
      keywords: tokenize(content),
    };

    index.entries.push(entry);
  });

  return index;
};

export function generateSearchIndex(): AstroIntegration {
  return {
    name: 'search-index',
    hooks: {
      'astro:build:setup': async () => {
        const srcDir = './src/pages';
        const files = getFilesRecursive(srcDir);
        const processedFiles = [];

        for (const file of files) {
          if (file.endsWith('.astro')) {
            try {
              const processed = await compileAstroFile(file);
              processedFiles.push(processed);
            } catch (e) {
              console.error('Error processing file:', file, e);
            }
          }
        }

        const searchIndex = createSearchIndex(processedFiles);
        const assetsDir = './src/assets';

        fs.writeFileSync(`${assetsDir}/search-index.json`, JSON.stringify(searchIndex, null, 2));
      },
    },
  };
}
