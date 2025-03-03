'use client';

import Header from '@/components/Header';
import Image from 'next/image';

interface ValueSectionProps {
  title: string;
  subtitle: string;
  description: string;
}

// Component for sections with orange background
function ValueSection({ title, subtitle, description }: ValueSectionProps) {
  return (
    <div className="flex flex-col items-center px-4 md:px-8">
      <div className="w-3 h-3 bg-black rounded-full mb-4"></div>
      <h2 className="text-xl md:text-2xl font-bold text-center text-white">{title}</h2>
      <h3 className="text-2xl md:text-3xl font-bold text-center text-white mb-6">{subtitle}</h3>
      
      <div className="w-24 h-1 bg-black mb-8"></div>
      
      <p className="text-center text-white max-w-md whitespace-pre-line">
        {description}
      </p>
    </div>
  );
}

interface CoreValueSectionProps {
  title: string;
  description: string;
  underlineColor?: string;
}

// Component for sections with dark background
function CoreValueSection({ title, description, underlineColor = "orange-500" }: CoreValueSectionProps) {
  return (
    <div className="text-center px-4 max-w-4xl mx-auto mb-16">
      <h2 className="text-4xl md:text-5xl font-light uppercase text-white mb-4">{title}</h2>
      <p className="text-white mb-6 whitespace-pre-line">{description}</p>
      <div className={`w-32 h-1 bg-${underlineColor} mx-auto`}></div>
    </div>
  );
}

interface ValueData {
  title: string;
  subtitle: string;
  description: string;
}

export default function AboutPage() {
  const values: ValueData[] = [
    {
      title: "OUR VISION",
      subtitle: "IS BRIGHT",
      description: "To artfully tell stories that are deeply rooted, close to reality, loaded with value to move people's lives."
    },
    {
      title: "OUR MISSION",
      subtitle: "GIVES US LIGHT",
      description: "We are committed to entertain, inform & inspire to have a positive impact on the future generations that are deeply rooted in their culture but evolved. Our stories will improve the perceptions other's have about our roots."
    },
    {
      title: "OUR VALUES",
      subtitle: "SHAPE OUR RELATIONSHIPS",
      description: "AUTHENTICITY\nWe believe in authentic storytelling, showing genuine real stories.\nWe believe being authentic is about trust. Trusting the human, the tradition and its innovations."
    }
  ];
  
  return (
    <main className="min-h-screen">
      <Header showProductions={true} />
      
      {/* About Us Title Section */}
      <section className="bg-orange-500 py-16">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-center text-white mb-12">ABOUT US</h1>
          
          {/* Three columns for values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            {values.map((value, index) => (
              <ValueSection 
                key={index}
                title={value.title}
                subtitle={value.subtitle}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Empathy Section with Dark Background */}
      <section className="bg-gray-800 py-16 relative">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/background-mountains.webp"
            alt="Mountains backdrop"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="relative z-10 container mx-auto">
          <CoreValueSection
            title="EMPATHY"
            description={`We are empathetic & caring.\nWe invest in people - not robots.\nWe value emotional human connections. We value culture & giving back.\nWe value inclusitivity & diversity. We simply care.`}
            underlineColor="orange-500"
          />
        </div>
      </section>
      
      {/* Craftsmanship Section with Dark Background */}
      <section className="bg-gray-800 py-16 relative">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/background-landscapes.webp"
            alt="Landscape backdrop"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="relative z-10 container mx-auto">
          <CoreValueSection
            title="CRAFTSMANSHIP"
            description={`We are a family owned business and believe that craftsmanship is everything.\nCrafts-manship is skill that is passed to us over generations.\nIt's care, it's passion, it's obsession, it's magical.`}
            underlineColor="orange-500"
          />
        </div>
      </section>
      
      {/* Creativity Section with Dark Background */}
      <section className="bg-gray-800 py-16 relative">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/background-desert.webp"
            alt="Desert backdrop"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="relative z-10 container mx-auto">
          <CoreValueSection
            title="CREATIVITY"
            description={`We believe in sparking creativity that empowers individuals to dream, act and envision a brighter future leaving a lasting impact.\nCreativity is our driving force.`}
            underlineColor="orange-500"
          />
        </div>
      </section>
    </main>
  );
}