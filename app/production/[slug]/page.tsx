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
    <div className="min-h-screen pt-24 pb-16 bg-[#ed7e0c] text-white">
      <div className="pt-28 pb-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row">
            {/* Left side - Production Information */}
            <div className="md:w-2/5 pr-0 md:pr-8 lg:pr-16">
              <h1 className="text-4xl font-bold mb-28 text-[#5f1f1e] tracking-widest">{production.title}</h1>
              
              {/* Genres with dot separators */}
              {production.genres && (
                <div className="mb-14">
                  <p className="text-lg md:text-2xl tracking-widest">
                    {production.genres.map((genre: string, index: number) => (
                      <span key={genre}>
                        {genre}
                        {index < production.genres.length - 1 && <span className="mx-2 text-[#5f1f1e]">•</span>}
                      </span>
                    ))}
                  </p>
                </div>
              )}
              
              {/* Description */}
              {production.description && (
                <p className="text-lg md:text-xl mb-6 tracking-widest">
                  {production.description}
                </p>
              )}
              
              {/* Stars */}
              {production.stars && (
                <div className="mb-28">
                  <p className="text-lg md:text-2xl text-[#5f1f1e] tracking-widest">
                    <span className="font-bold">Stars:</span> {production.stars.join(', ')}
                  </p>
                </div>
              )}
              
              {/* Episodes */}
              {production.episodeCount && (
                <div>
                  <p className="text-lg md:text-2xl font-bold tracking-widest">
                    EPISODES ({production.episodeCount})
                  </p>
                </div>
              )}
            </div>
            
            {/* Right side - Production Image */}
            <div className="md:w-3/5 mt-10 md:mt-0">
              <div className="relative aspect-auto h-[500px] w-full">
                <Image 
                  src={production.image}
                  alt={production.alt || production.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}