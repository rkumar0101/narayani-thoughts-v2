// src/lib/data.ts

const STRAPI_URL = 'http://127.0.0.1:1337';

export type Article = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  content: string;
  imageUrl: string;
};

// This is the corrected mapping function
function mapStrapiToArticle(item: any): Article {
  // The fix is here: We access properties directly from 'item'
  // instead of 'item.attributes'.
  return {
    id: item.id.toString(),
    title: item.title,
    excerpt: item.excerpt,
    category: item.category,
    author: item.author,
    content: item.content,
    imageUrl: item.imageUrl,
  };
}

// Gets ALL articles
export const getArticles = async (): Promise<Article[]> => {
  const url = `${STRAPI_URL}/api/articles?populate=*`;

  try {
    const response = await fetch(url, { cache: 'no-store' });

    if (!response.ok) {
      throw new Error(`Failed to fetch articles. Status: ${response.status}`);
    }

    const strapiData = await response.json();

    if (!strapiData.data) {
      return [];
    }

    const articles = strapiData.data.map(mapStrapiToArticle);
    return articles;

  } catch (error) {
    console.error("Error in getArticles:", error);
    return [];
  }
};

// Gets ONE article by its ID
export const getArticleById = async (id: string): Promise<Article | null> => {
    const url = `<span class="math-inline">\{STRAPI\_URL\}/api/articles/</span>{id}?populate=*`;

    try {
        const response = await fetch(url, { cache: 'no-store' });

        if (!response.ok) { return null; }

        const strapiData = await response.json();

        if (!strapiData.data) { return null; }

        const article = mapStrapiToArticle(strapiData.data);
        return article;

    } catch (error) {
        console.error(`Error in getArticleById for ID ${id}:`, error);
        return null;
    }
};