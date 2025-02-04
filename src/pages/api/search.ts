import type { APIRoute } from 'astro';
import searchIndex from '../../assets/search-index.json';
import type { IndexEntry } from '@/utils/search.ts';

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const query = url.searchParams.get('search') || '';
    const page = parseInt(url.searchParams.get('page') || '1');
    const perPage = 10;

    if (!query) {
      return new Response(
        JSON.stringify({
          success: true,
          results: [],
          pagination: {
            total: 0,
            per_page: perPage,
            current_page: page,
            total_pages: 0,
          },
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
    }

    const pages = searchIndex.entries as IndexEntry[];

    const queryWords = query
      .toLowerCase()
      .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '')
      .split(' ')
      .filter((word) => word.length > 2);

    const matchedPages: IndexEntry[] = [];

    pages.forEach((page) => {
      const { keywords } = page;
      const contentWords = keywords;

      const matches = queryWords.filter((word) => contentWords.includes(word));

      if (matches.length > 0) {
        matchedPages.push(page);
      }
    });

    const allResults = matchedPages.map((page) => {
      const entry = page;

      return {
        url: entry.path,
        title: entry.title,
        description: entry.content,
      };
    });

    const totalResults = allResults.length;
    const totalPages = Math.ceil(totalResults / perPage);
    const startIndex = (page - 1) * perPage;
    const paginatedResults = allResults.slice(startIndex, startIndex + perPage);

    return new Response(
      JSON.stringify({
        success: true,
        results: paginatedResults,
        pagination: {
          total: totalResults,
          per_page: perPage,
          current_page: page,
          total_pages: totalPages,
        },
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  } catch (error) {
    console.error('Error performing search:', error);

    return new Response(
      JSON.stringify({
        success: false,
        message: 'Произошла ошибка при выполнении поиска',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  }
};
