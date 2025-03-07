'use client';

import Image from 'next/image';

interface ValueSectionProps {
  title: string;
  subtitle: string;
  description: string;
}

// Component for sections with orange background
function ValueSection({ title, subtitle, description, noWrap = true }: ValueSectionProps & { noWrap?: boolean }) {
  return (
    <div className="flex flex-col items-center px-4 md:px-20">
      <div className="w-7 h-7 bg-black rounded-full mb-9"></div>
      
      {/* Title and subtitle container */}
      <div className="h-[7rem] flex flex-col mb-8">
        {/* Title is now positioned absolutely the same regardless of subtitle */}
          <h2 className="text-about-us-1 md:text-about-us-1 font-thin text-center text-white leading-none tracking-wider">{title}</h2>
          <h2 className={`text-about-us-1 md:text-about-us-1 font-bold text-center text-white leading-none tracking-wider ${noWrap ? 'whitespace-nowrap' : 'whitespace-pre-line'}`}>{subtitle}</h2>
      </div>
      
      <div className="w-black-dash h-2 bg-black mb-5"></div>
      
      <p className="text-about-us-subtitle text-center font-extralight text-white max-w-xs mx-auto leading-relaxed">
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
    <div className="text-center px-4 max-w-4xl mx-auto mb-12">
      <h2 className="text-4xl md:text-5xl font-light uppercase text-white mb-3 leading-tight">{title}</h2>
      <p className="text-white mb-4 whitespace-pre-line leading-snug">{description}</p>
      <div className={`w-32 h-1 bg-${underlineColor} mx-auto`}></div>
    </div>
  );
}

interface ValueData {
  title: string;
  subtitle: string;
  description: string;
  noWrap?: boolean;
}

export default function AboutPage() {
  const values: ValueData[] = [
    {
      title: "OUR VISION",
      subtitle: "IS BRIGHT",
      description: "To artfully tell stories that are deeply rooted, close to reality, loaded with value to move people's lives.",
      noWrap: true
    },
    {
      title: "OUR MISSION",
      subtitle: "GIVES US LIGHT",
      description: "We are committed to entertain, inform & inspire to have a positive impact on the future generations that are deeply rooted in their culture but evolved. Our stories will improve the perceptions other's have about our roots.",
      noWrap: true
    },
    {
      title: "OUR VALUES",
      subtitle: "SHAPE OUR\nRELATIONSHIPS",
      description: "AUTHENTICITY\nWe believe in authentic storytelling, showing genuine real stories.\nWe believe being authentic is about trust. Trusting the human, the tradition and its innovations.",
      noWrap: false
    }
  ];
  
  return (
    <div className="min-h-screen">
      {/* Added top padding/margin to push content down */}
      <div className="pt-28"></div>
      
      {/* About Us Title Section - Now with image background */}
      <section className="relative">
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
        <h1 className="pt-[4.5rem] text-3388 md:text-3388 font-extralight text-center text-white mb-[5.8rem] tracking-widest">ABOUT US</h1>
          
          {/* Three columns for values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 pb-[2.2rem]">
            {values.map((value, index) => (
              <ValueSection 
                key={index}
                title={value.title}
                subtitle={value.subtitle}
                description={value.description}
                noWrap={value.noWrap}
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
        
        <div className="relative z-10 py-28">
          {/* Empathy Section */}
          <section className="">
            <div className="container mx-auto">
              <div className="text-center px-4 max-w-5xl mx-auto">
                <h2 className="text-5xl md:text-65 font-extralight uppercase text-white mb-3 leading-tight">EMPATHY</h2>
                <p className="text-144 font-extralight text-white mb-1 whitespace-pre-line leading-tight">We are empathetic & caring</p>
                <p className="text-144 font-extralight text-white mb-1 whitespace-pre-line leading-tight">We invest in people - not in robots.</p>
                <p className="text-144 font-extralight text-white mb-8 whitespace-pre-line leading-tight">We value emotional human connections. We value culture & giving back.<br/>We value inclusivity & diversity.<span className='font-semibold'> We simply care.</span></p>
              </div>
            </div>
          </section>

          <div className="w-40 h-2 bg-orange-500 mx-auto mb-10"></div>

          {/* Craftsmanship Section */}
          <section>
            <div className="container mx-auto">
              <div className="text-center px-4 max-w-5xl mx-auto">
                <h2 className="text-5xl md:text-65 font-extralight uppercase text-white mb-3 leading-tight">CRAFTSMANSHIP</h2>
                <p className="text-144 font-extralight text-white mb-8 whitespace-pre-line leading-tight">We are a family owned business and believe that craftsmanship is everything. <br/> Crafts-manship is skill that is passed to us over generations. <br/> It's care, it's passion, it's obsession, it's magical.</p>             
              </div>
            </div>
          </section>
          
          <div className="w-40 h-2 bg-orange-500 mx-auto mb-10"></div>

          {/* Creativity Section */}
          <section>
            <div className="container mx-auto">
              <div className="text-center px-4 max-w-5xl mx-auto mb-12">
                <h2 className="text-5xl md:text-65 font-extralight uppercase text-white mb-3 leading-tight">CREATIVITY</h2>
                <p className="text-144 font-extralight text-white mb-8 whitespace-pre-line leading-tight">We believe in sparking creativity that empowers individuals to dream, act and envision <br/>a brighter future leaving a lasting impact.<br/>Creativity is our driving force.</p>             
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}