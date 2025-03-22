'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

// Define types for production data
interface Production {
  id: string;
  title: string;
  genres: string[];
  description: string;
  stars: string[];
  episodeCount: number;
  image: string;
  arabicTitle?: string;
}

// Mock data for productions - in a real app, this would come from an API or database
const productions: Record<string, Production> = {
  'souq-al-harir-1': {
    id: 'souq-al-harir-1',
    title: 'SOUQ AL HARIR 1',
    genres: ['SOCIAL', 'DRAMA', 'ROMANTIC'],
    description: 'Omran the textile merchant wants to marry for love, but he\'ll face troubles not only from his wives\' jealousy but other merchants for his trade ideas.',
    stars: ['Qamar Khalaf', 'Fadi Sabih', 'Nadine Tahseeine Bek', 'Karess Bashar', 'Salloum Haddad'],
    episodeCount: 30,
    image: '/productions/souq-al-harir-1.jpg',
    arabicTitle: 'سوق الحرير'
  },
  // Add more productions as needed
};

export default function ProductionDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [production, setProduction] = useState<Production | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, you would fetch the production data from an API
    // For now, we'll use our mock data
    setLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      const foundProduction = productions[slug];
      setProduction(foundProduction || null);
      setLoading(false);
    }, 500);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen pt-28 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (!production) {
    return (
      <div className="min-h-screen pt-28 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Production Not Found</h1>
        <p className="text-xl">The production you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Production Details Section with orange background */}
        <div className="bg-[#ed7e0c] text-white rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left side - Production Information */}
            <div className="p-6 md:p-10 md:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{production.title}</h1>
              
              {/* Genres */}
              <div className="mb-6">
                <p className="text-lg md:text-xl">
                  {production.genres.map((genre, index) => (
                    <span key={genre}>
                      {genre}
                      {index < production.genres.length - 1 && <span className="mx-2">•</span>}
                    </span>
                  ))}
                </p>
              </div>
              
              {/* Description */}
              <p className="text-lg md:text-xl mb-8">
                {production.description}
              </p>
              
              {/* Stars */}
              <div className="mb-6">
                <h2 className="text-xl md:text-2xl font-bold mb-2">Stars:</h2>
                <p className="text-lg md:text-xl">
                  {production.stars.join(', ')}
                </p>
              </div>
              
              {/* Episodes */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-2">EPISODES ({production.episodeCount})</h2>
              </div>
            </div>
            
            {/* Right side - Production Image */}
            <div className="md:w-1/2 relative min-h-[300px] md:min-h-[500px]">
              <Image 
                src={production.image} 
                alt={production.title}
                fill
                className="object-cover"
                priority
              />
              
              {/* Arabic title overlay on the bottom right of the image */}
              {production.arabicTitle && (
                <div className="absolute bottom-4 right-4 text-white text-4xl md:text-5xl font-bold">
                  {production.arabicTitle}
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Additional content like videos, photos, etc. can be added here */}
        <div className="mt-12">
          {/* Additional sections like trailer, photos, etc. could be added here */}
        </div>
      </div>
    </div>
  );
}