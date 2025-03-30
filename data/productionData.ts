// Define types for production data
export interface Production {
  id: number | string;
  title: string;
  image: string;
  slugImg?: string;
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
    image: "/production/souq-al-harir-1.webp",
    slugImg: "/production/slug/souq-al-harir-1.webp",
    alt: "Souq Al Harir 1",
    link: "/production/souq-al-harir-1",
    genres: ["SOCIAL", "DRAMA", "ROMANTIC"],
    description:
      "Omran the textile merchant wants to marry for love, but he'll face troubles not only from his wives' jealousy but other merchants for his trade ideas.",
    stars: [
      "Qamar Khalaf",
      "Fadi Sabih",
      "Nadine Tahseeine Bek",
      "Karess Bashar",
      "Salloum Haddad",
    ],
    episodeCount: 30,
    arabicTitle: "سوق الحرير",
    year: "2022",
  },
  {
    id: 2,
    title: "AGHMED AYNAYK",
    image: "/production/aghmed-aynayk.webp",
    slugImg: "/production/slug/aghmed-aynayk.webp",
    alt: "Aghmed Aynayk",
    link: "/production/aghmed-aynayk",
    genres: ["SOCIAL", "DRAMA"],
    description:
      "Forced by life's circumstances, Hayat entrusts her eight-year-old son Joud, who's on the autism spectrum, to her best friend Mo'nes. Can he rise to the challenge?",
    stars: [
      "Muna Wassef",
      "Amal Arafa",
      "Abdel Moneim Amiry",
      "Fayez Kazak",
      "Ahmad Alahmad",
    ],
    episodeCount: 30,
    arabicTitle: "أغمض عينيك",
    year: "2023",
  },
  {
    id: 3,
    title: "AL ZAEEM",
    image: "/production/al-zaeem.webp",
    slugImg: "/production/slug/al-zaeem.webp",
    alt: "Al Zaeem",
    link: "/production/al-zaeem",
    genres: ["LEVANTINE SERIES", "DRAMA"],
    description:
      "The dignitaries Of Damascus quarters decide to elect the boss of bosses, not easy to get this coveted title which leads to secret conspiracies.",
    stars: [
      "Bassel Khaiat",
      "Saba Mubarak",
      "Khaled Taja",
      "Muna Wassef",
      "Amal Arafa",
      "Abdel Hadi Al Sabbagh",
    ],
    episodeCount: 30,
    arabicTitle: "الزعيم",
    year: "2021",
  },
  {
    id: 4,
    title: "HAMAM CHAMEE",
    image: "/production/hamam-chamee.webp",
    slugImg: "/production/slug/hamam-chamee.webp",
    alt: "Hamam Chamee",
    link: "/production/hamam-chamee",
    genres: ["HISTORICAL", "COMEDY", "DRAMA"],
    description:
      "The series is a comedy presents characters from the Damascene environment in the 1950s, set in one of the neighborhoods of Damascus. It is perhaps the first of its kind to revolve around the hammam and the neighborhood, depicting amusing Damascene folk tales that tell the story of a community and a fully integrated society.",
    stars: [
      "Mustafa Alkhani",
      "Ahmad Alahmad",
      "Dima Bayaa",
      "Maram Ali",
      "Dima Aljundi",
    ],
    episodeCount: 30,
    arabicTitle: "حمام شامي",
    year: "2020",
  },
  {
    id: 5,
    title: "SOUQ AL HARIR 2",
    image: "/production/souq-al-harir-2.webp",
    slugImg: "/production/slug/souq-al-harir-2.webp",
    alt: "Souq Al Harir 2",
    link: "/production/souq-al-harir-2",
    genres: ["SOCIAL", "DRAMA", "ROMANTIC"],
    description:
      "Secrets of the two bullets heard during the meeting of brothers Ghareeb and Imran still echo in the secrecy of what happened that night.",
    stars: [
      "Bassam Kousa",
      "Salloum Haddad",
      "Karess Bashar",
      "Fadi Sabih",
      "Qamar Khalaf",
      "Nadine Tahseeine Bek",
      "Milad Youssef",
    ],
    episodeCount: 30,
    arabicTitle: "سوق الحرير 2",
    year: "2023",
  },
  {
    id: 6,
    title: "BAB AL HARA 4 ",
    image: "/production/bab-al-hara-4.webp",
    slugImg: "/production/slug/bab-al-hara-4.webp",
    alt: "Bab El Hara 4",
    link: "/production/bab-el-hara-4",
    genres: ["SOCIAL", "DRAMA"],
    description:
      "Bab Al-Hara is one of the most popular television series in the Arab world, reportedly watched by millions of people in the Arab world. The series chronicles the daily happenings and family dramas in a neighborhood in Damascus, Syria in the inter-war period under French rule when the local population yearned for independence.",
    stars: [
      "Abbas al-Noury",
      "Milad Youssef",
      "Wael Sharaf",
      "Sabah Jazairi",
      "Taj Haidar",
      "Anahid Fayad",
      "Wafeq Al-Za'em",
      "Sabah Barakat",
      "Rawad Aliu",
      "Fedaa Alkabra",
      "Lama Ibrahim",
      "Ola Bader",
    ],
    episodeCount: 30,
    arabicTitle: "باب الحارة 4",
    year: "2023",
  },
  {
    id: 7,
    title: "BAB AL HARA 5",
    image: "/production/bab-al-hara-5.webp",
    slugImg: "/production/slug/bab-al-hara-5.webp",
    alt: "Bab El Hara 5",
    link: "/production/bab-el-hara-5",
    genres: ["SOCIAL", "DRAMA"],
    description:
      "Something is up Abu Diyab’s sleeves who disguises himself once he arrives at Al Dabe’ neighborhood and recognizes Mamoun, a notorious man with a dark past.",
    stars: [
      "Wafik Al Zaeem",
      "Lilia Al Atrash",
      "Samer Al Masri",
      "Shoukran Mortaja",
      "Wafa Moslally",
      "Wael Sharaf",
      "Milad Youssef",
      "Muna Wassef",
      "Mustafa Alkhani",
      "Kosai Khauli",
      "Fayez Kazak",
      "Bassam Kousa",
      "Jumana Murad",
    ],
    episodeCount: 30,
    arabicTitle: "باب الحارة 5",
    year: "2023",
  },
];

// Function to get all productions
export function getAllProductions(): Production[] {
  return productions;
}

// Function to get a production by slug from the link field
export function getProductionBySlug(slug: string): Production | undefined {
  return productions.find((production) => {
    // Extract slug from the link (e.g., "/production/souq-al-harir-1" -> "souq-al-harir-1")
    const productionSlug = production.link.split("/").pop();
    return productionSlug === slug;
  });
}

// Function to get productions by genre
export function getProductionsByGenre(genre: string): Production[] {
  return (
    productions.filter((production) =>
      production.genres?.some((g) => g.toLowerCase() === genre.toLowerCase())
    ) || []
  );
}
