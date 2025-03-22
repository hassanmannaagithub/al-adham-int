// Define types for production data
export interface Production {
    id: number | string;
    title: string;
    image: string;
    alt: string;
    link: string;
    // Additional fields for detail page
    genres?: string[];
    description?: string;
    stars?: string[];
    episodeCount?: number;
    arabicTitle?: string;
    year?: string;
    thumbnail?: string;
  }
  
  // Data for productions
  export const productions: Production[] = [
    {
      id: 1,
      title: "SOUQ AL HARIR 1",
      image: "/souq-al-harir-1.webp",
      alt: "Souq Al Harir 1",
      link: "/production/souq-al-harir-1",
      genres: ['SOCIAL', 'DRAMA', 'ROMANTIC'],
      description: 'Omran the textile merchant wants to marry for love, but he\'ll face troubles not only from his wives\' jealousy but other merchants for his trade ideas.',
      stars: ['Qamar Khalaf', 'Fadi Sabih', 'Nadine Tahseeine Bek', 'Karess Bashar', 'Salloum Haddad'],
      episodeCount: 30,
      arabicTitle: 'سوق الحرير',
      year: '2022'
    },
    {
      id: 2,
      title: "AGHMED AYNAYK",
      image: "/aghmed-aynayk.webp",
      alt: "Aghmed Aynayk",
      link: "/production/aghmed-aynayk",
      genres: ['DRAMA', 'FAMILY'],
      description: 'A compelling story about family relationships and personal transformation in modern society.',
      stars: ['Mohammed Al Rashi', 'Dima Kandalaft', 'Maxim Khalil'],
      episodeCount: 25,
      arabicTitle: 'أغمض عينيك',
      year: '2023'
    },
    {
      id: 3,
      title: "AL ZAEEM",
      image: "/al-zaeem.webp",
      alt: "Al Zaeem",
      link: "/production/al-zaeem",
      genres: ['POLITICAL', 'DRAMA', 'THRILLER'],
      description: 'A political drama following the rise and challenges of a charismatic leader in a changing political landscape.',
      stars: ['Taim Hassan', 'Nesreen Tafesh', 'Bassem Yakhour'],
      episodeCount: 28,
      arabicTitle: 'الزعيم',
      year: '2021'
    },
    {
      id: 4,
      title: "HAMAM CHAMEE",
      image: "/hamam-chamee.webp",
      alt: "Hamam Chamee",
      link: "/production/hamam-chamee",
      genres: ['HISTORICAL', 'COMEDY', 'DRAMA'],
      description: 'Set in a traditional Damascus bathhouse, this series explores the lives and stories of its visitors against a rich historical backdrop.',
      stars: ['Salloum Haddad', 'Abbas Al Nouri', 'Sabah Al Jazairi'],
      episodeCount: 32,
      arabicTitle: 'حمام شامي',
      year: '2020'
    }
  ];
  
  // Function to get all productions
  export function getAllProductions(): Production[] {
    return productions;
  }
  
  // Function to get a production by slug from the link field
  export function getProductionBySlug(slug: string): Production | undefined {
    return productions.find(production => {
      // Extract slug from the link (e.g., "/production/souq-al-harir-1" -> "souq-al-harir-1")
      const productionSlug = production.link.split('/').pop();
      return productionSlug === slug;
    });
  }
  
  // Function to get productions by genre
  export function getProductionsByGenre(genre: string): Production[] {
    return productions.filter(production => 
      production.genres?.some(g => g.toLowerCase() === genre.toLowerCase())
    ) || [];
  }