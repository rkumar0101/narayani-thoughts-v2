// src/lib/data.ts

export type Article = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  content: string;
  imageUrl: string; // New field for images
};

export const getArticles = (): Article[] => {
  return [
    {
      id: '1',
      title: 'Why India’s Neighborhood Policy Needs a Reset',
      excerpt: 'A deep dive into the complexities of foreign relations and the strategic imperatives for India in the coming decade.',
      category: 'Geopolitics',
      author: 'Strategic Analyst',
      content: 'The foreign policy of a nation is a fluid entity, shaped by the ever-shifting sands of global power dynamics... [This would be the full, multi-paragraph content of the article.]',
      // New Image URL
      imageUrl: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=1287&auto=format&fit=crop',
    },
    {
      id: '2',
      title: 'How ISRO Achieved Chandrayaan 3 on a Shoestring Budget',
      excerpt: 'Unpacking the frugal innovation and engineering marvels that led to one of the world’s most cost-effective lunar missions.',
      category: 'Science',
      author: 'Science Desk',
      content: 'Frugal innovation, or "jugaad," is often celebrated in India, but ISRO’s success with Chandrayaan 3 is a masterclass in structured, high-tech, low-cost execution... [This would be the full, multi-paragraph content of the article.]',
      // New Image URL
      imageUrl: 'https://images.unsplash.com/photo-1614726365952-7b036c4a3a30?q=80&w=1170&auto=format&fit=crop',
    },
    {
      id: '3',
      title: 'The Justice Delay Crisis: Data and Case Studies',
      excerpt: 'An evidence-based look at the challenges within the Indian judicial system and potential paths toward reform.',
      category: 'Society',
      author: 'Legal Correspondent',
      content: 'Justice delayed is justice denied. This age-old adage rings especially true in the context of the Indian judicial system, where millions of cases remain pending for years... [This would be the full, multi-paragraph content of the article.]',
      // New Image URL
      imageUrl: 'https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1170&auto=format&fit=crop',
    },
    {
      id: '4',
      title: 'Electoral Reforms India Actually Needs',
      excerpt: 'Examining the proposals that could reshape Indian democracy and the political inertia holding them back.',
      category: 'Politics',
      author: 'Political Editor',
      content: 'The bedrock of any democracy is the fairness and transparency of its electoral process. While India has successfully conducted massive elections for decades, the time is ripe for a new wave of reforms... [This would be the full, multi-paragraph content of the article.]',
      // New Image URL
      imageUrl: 'https://images.unsplash.com/photo-1600965962148-5289a3044a17?q=80&w=1035&auto=format&fit=crop',
    },
  ];
};