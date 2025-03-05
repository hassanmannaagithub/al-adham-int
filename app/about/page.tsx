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
      <div className="w-6 h-6 bg-black rounded-full mb-4"></div>
      
      {/* Fixed height container for title and subtitle */}
      <div className="h-48 flex flex-col justify-start items-center">
        <h2 className="text-about-us-1 md:text-about-us-1 font-light text-center text-white">{title}</h2>
        <h3 className="text-about-us-1 md:text-about-us-1 font-bold text-center text-white">{subtitle}</h3>
      </div>
      
      {/* Black line will now be aligned at the same position */}
      <div className="w-black-dash h-2 bg-black mb-8"></div>
      
      <p className="mt-10 text-center text-about-us-subtitle font-light text-white max-w-md whitespace-pre-line">
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
      
      {/* About Us Title Section - Now with image background */}
      <section className="py-16 relative">
        <div className="absolute inset-0 z-0 bg-[#ed7e0c]">
          <Image
            src="/about-us-1.webp"
            alt="About us backdrop"
            fill
            className="object-contain"
            priority
          />
        </div>
        
        <div className="relative z-10 container mx-auto">
          <h1 className="text-3388 md:text-3388 font-light text-center text-white mb-24">ABOUT US</h1>
          
          {/* Three columns for values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 mb-48">
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
      
      {/* Core Values Section with a single shared background */}
      <div className="relative">
        {/* Single background image for all core value sections */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/about-us-2.webp" 
            alt="Unified core values backdrop"
            fill
            className="object-cover"
          />
          {/* Dark overlay added on top of the image */}
          <div className="absolute inset-0" style={{ backgroundColor: '#303030', opacity: 0.84 }}></div>
        </div>
        
        <div className="relative z-10 py-36">
          {/* Empathy Section */}
          <section className="">
            <div className="container mx-auto">
              <div className="text-center px-4 max-w-5xl mx-auto">
                <h2 className="text-5xl md:text-65 font-extralight uppercase text-white mb-4">EMPATHY</h2>
                <p className="text-144 font-extralight text-white mb-2 whitespace-pre-line">We are empathetic & caring</p>
                <p className="text-144 font-extralight text-white mb-2 whitespace-pre-line">We invest in people - not in robots.</p>
                <p className="text-144 font-extralight text-white mb-10 whitespace-pre-line">We value emotional human connections. We value culture & giving back.<br/>We value inclusivity & diversity.<span className='font-semibold'> We simply care.</span></p>
              </div>
            </div>
          </section>

          <div className="w-40 h-2 bg-orange-500 mx-auto mb-14"></div>

          {/* Craftsmanship Section */}
          <section>
            <div className="container mx-auto">
              <div className="text-center px-4 max-w-5xl mx-auto">
                <h2 className="text-5xl md:text-65 font-extralight uppercase text-white mb-4">CRAFTSMANSHIP</h2>
                <p className="text-144 font-extralight text-white mb-10 whitespace-pre-line">We are a family owned business and believe that craftsmanship is everything. <br/> Crafts-manship is skill that is passed to us over generations. <br/> It's care, it's passion, it's obsession, it's magical.</p>             
              </div>
            </div>
          </section>
          
          <div className="w-40 h-2 bg-orange-500 mx-auto mb-14"></div>

          {/* Creativity Section */}
          <section>
            <div className="container mx-auto">
              <div className="text-center px-4 max-w-5xl mx-auto mb-16">
                <h2 className="text-5xl md:text-65 font-extralight uppercase text-white mb-4">CREATIVITY</h2>
                <p className="text-144 font-extralight text-white mb-10 whitespace-pre-line">We believe in sparking creativity that empowers individuals to dream, act and envision <br/>a brighter future leaving a lasting impact.<br/>Creativity is our driving force.</p>             
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}