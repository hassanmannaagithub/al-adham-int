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
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row">
            {/* Image - First on mobile, second on md+ */}
            <div className="w-full lg:w-3/5 order-first lg:order-last mb-8 lg:mb-0 lg:flex lg:justify-end">
              <div className="relative aspect-[4/5] w-full max-w-2xl mx-auto lg:mr-0 lg:ml-auto" style={{height: "auto", maxHeight: "700px"}}>
                <Image
                  src={production.image}
                  alt={production.alt || production.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            
            {/* Production Information - Second on mobile, first on md+ */}
            <div className="w-full lg:w-2/5 order-last lg:order-first py-6 lg:py-10 lg:pr-16 text-center lg:text-left">
              <h1 className="text-4xl font-bold mb-12 lg:mb-24 text-[#5f1f1e] tracking-widest">{production.title}</h1>
              
              {/* Genres with dot separators */}
              {production.genres && (
                <div className="mb-8 lg:mb-14">
                  <p className="text-lg lg:text-2xl tracking-widest">
                    {production.genres.map((genre: string, index: number) => (
                      <span key={genre}>
                        {genre}
                        {index < production.genres.length - 1 && 
                          <span className="mx-3 inline-flex items-center">
                            <span className="inline-block w-4 h-4 rounded-full bg-[#5f1f1e]"></span>
                          </span>
                        }
                      </span>
                    ))}
                  </p>
                </div>
              )}
              
              {/* Description */}
              {production.description && (
                <p className="text-lg lg:text-xl mb-6 tracking-widest">
                  {production.description}
                </p>
              )}
              
              {/* Stars */}
              {production.stars && (
                <div className="mb-12 lg:mb-28">
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
          </div>
        </div>
      </div>
    </div>
  );
}