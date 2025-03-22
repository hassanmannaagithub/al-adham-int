'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { getProductionBySlug } from '@/data/productionData';

export default function ProductionDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [production, setProduction] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      const foundProduction = getProductionBySlug(slug);
      setProduction(foundProduction || null);
      setLoading(false);
    }, 500);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen pt-28 flex items-center justify-center bg-[#ed7e0c]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  if (!production) {
    return (
      <div className="min-h-screen pt-28 flex flex-col items-center justify-center bg-[#ed7e0c] text-white">
        <h1 className="text-4xl font-bold mb-4">Production Not Found</h1>
        <p className="text-xl">The production you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#ed7e0c] text-white">
      <div className="pt-28 pb-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row">
            {/* Left side - Production Information */}
            <div className="md:w-1/2 pr-0 md:pr-8 lg:pr-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10">{production.title}</h1>
              
              {/* Genres with dot separators */}
              {production.genres && (
                <div className="mb-10">
                  <p className="text-lg md:text-xl">
                    {production.genres.map((genre: string, index: number) => (
                      <span key={genre}>
                        {genre}
                        {index < production.genres.length - 1 && <span className="mx-2">•</span>}
                      </span>
                    ))}
                  </p>
                </div>
              )}
              
              {/* Description */}
              {production.description && (
                <p className="text-lg md:text-xl mb-10">
                  {production.description}
                </p>
              )}
              
              {/* Stars */}
              {production.stars && (
                <div className="mb-10">
                  <p className="text-lg md:text-xl">
                    <span className="font-bold">Stars:</span> {production.stars.join(', ')}
                  </p>
                </div>
              )}
              
              {/* Episodes */}
              {production.episodeCount && (
                <div>
                  <p className="text-lg md:text-xl font-bold">
                    EPISODES ({production.episodeCount})
                  </p>
                </div>
              )}
            </div>
            
            {/* Right side - Production Image */}
            <div className="md:w-1/2 mt-10 md:mt-0">
              <div className="relative aspect-auto h-[500px] w-full">
                <Image 
                  src={production.image} 
                  alt={production.alt || production.title}
                  fill
                  className="object-contain"
                  priority
                />
                
                {/* Arabic title overlay on the bottom of the image */}
                {production.arabicTitle && (
                  <div className="absolute bottom-4 right-4 text-white text-3xl md:text-4xl font-bold">
                    {production.arabicTitle}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}