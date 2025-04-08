"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Custom hook to detect viewport width
function useViewportWidth() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

// Conditional BR component that only renders on screens >= 640px
function ResponsiveBr() {
  const width = useViewportWidth();
  return width >= 640 ? <br /> : null;
}

interface ValueSectionProps {
  title: string;
  subtitle: string;
  description: string;
}

// Component for sections with orange background
function ValueSection({
  title,
  subtitle,
  description,
  noWrap = true,
}: ValueSectionProps & { noWrap?: boolean }) {
  return (
    <div className="flex flex-col items-center px-2 md:px-6">
      <div className="xl:block w-7 h-7 bg-black rounded-full mb-4 xl:mb-9"></div>

      <div className="h-[7rem] flex flex-col mb-8">
        <h2 className="text-3xl md:text-about-us-1 font-thin text-center text-white leading-none tracking-wider">
          {title}
        </h2>
        <h2
          className={`text-3xl md:text-about-us-1 font-bold text-center text-white leading-none tracking-wider ${
            noWrap ? "sm:whitespace-nowrap" : "sm:whitespace-pre-line"
          } whitespace-normal`}
        >
          {subtitle}
        </h2>
      </div>

      <div className="w-black-dash h-2 bg-black mb-7"></div>

      <p className="text-base sm:text-[1.4rem] text-center font-extralight text-white max-w-[280px] sm:max-w-[85%] md:max-w-[22rem] leading-tight tracking-wider whitespace-normal sm:whitespace-pre-line">
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
function CoreValueSection({
  title,
  description,
  underlineColor = "orange-500",
}: CoreValueSectionProps) {
  return (
    <div className="text-center px-4 max-w-4xl mx-auto mb-12">
      <h2 className="text-4xl md:text-5xl font-light uppercase text-white mb-3 leading-tight">
        {title}
      </h2>
      <p className="text-white mb-4 whitespace-normal sm:whitespace-pre-line leading-snug">
        {description}
      </p>
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

export default function AboutContent() {
  const values: ValueData[] = [
    {
      title: "OUR VISION",
      subtitle: "IS BRIGHT",
      description:
        "To artfully tell stories that\nare deeply rooted, close to\nreality, loaded with value to\nmove people's lives.",
      noWrap: true,
    },
    {
      title: "OUR MISSION",
      subtitle: "GIVES US LIGHT",
      description:
        "We are committed to\nentertain, inform & inspire to have\na positive impact on the future\ngenerations that are deeply\nrooted in their culture but evolved.\nOur stories will improve the\nperceptions other's have about\nour roots.",
      noWrap: true,
    },
    {
      title: "OUR VALUES",
      subtitle: "SHAPE OUR\nRELATIONSHIPS",
      description:
        "AUTHENTICITY\nWe believe in authentic\nstorytelling, showing genuine\nreal stories.\nWe believe being authentic is\nabout trust. Trusting the human,\nthe tradition and its innovations.",
      noWrap: false,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* <div className="pt-28"></div> */}

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
          <h1 className="pt-[5.2rem] text-3388 md:text-3388 font-extralight text-center text-white mb-[5.8rem] tracking-widest">
            ABOUT US
          </h1>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 xl:gap-20 pb-20">
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

      <div className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about-us-2.webp"
            alt="Unified core values backdrop"
            fill
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "#303030", opacity: 0.84 }}
          ></div>
        </div>

        <div className="relative z-10 py-[6.5rem]">
          <section className="pb-2">
            <div className="container mx-auto">
              <div className="text-center px-4 mx-auto max-w-[280px] sm:max-w-[85%] md:max-w-[30rem] lg:max-w-[40rem]">
                <h2 className="text-3xl md:text-65 font-extralight uppercase text-white leading-snug tracking-widest">
                  EMPATHY
                </h2>
                <p className="text-base sm:text-144 font-extralight text-white mb-1 whitespace-normal sm:whitespace-pre-line leading-snug tracking-widest">
                  We are empathetic & caring
                </p>
                <p className="text-base sm:text-144 font-extralight text-white mb-1 whitespace-normal sm:whitespace-pre-line leading-snug tracking-widest">
                  We invest in people - not in robots.
                </p>
                <p className="text-base sm:text-144 font-extralight text-white mb-8 whitespace-normal sm:whitespace-pre-line leading-snug tracking-widest">
                  We value emotional human connections. We value culture &
                  giving back.
                  <ResponsiveBr />
                  We value inclusivity & diversity.
                  <span className="font-semibold"> We simply care.</span>
                </p>
              </div>
            </div>
          </section>

          <div className="w-40 h-2 bg-orange-500 mx-auto mb-10"></div>

          <section>
            <div className="container mx-auto">
              <div className="text-center px-4 mx-auto max-w-[280px] sm:max-w-[85%] md:max-w-[30rem] lg:max-w-[40rem]">
                <h2 className="text-3xl md:text-65 font-extralight uppercase text-white leading-snug tracking-widest">
                  CRAFTSMANSHIP
                </h2>
                <p className="text-base sm:text-144 font-extralight text-white mb-8 whitespace-normal sm:whitespace-pre-line leading-snug tracking-widest">
                  We are a family owned business and believe that craftsmanship
                  is everything. <ResponsiveBr /> Crafts-manship is skill that
                  is passed to us over generations. <ResponsiveBr /> It's care,
                  it's passion, it's obsession, it's magical.
                </p>
              </div>
            </div>
          </section>

          <div className="w-36 h-2 bg-orange-500 mx-auto mb-5"></div>

          <section>
            <div className="container mx-auto">
              <div className="text-center px-4 mx-auto max-w-[280px] sm:max-w-[85%] md:max-w-[30rem] lg:max-w-[40rem]">
                <h2 className="text-3xl md:text-65 font-extralight uppercase text-white leading-snug tracking-widest">
                  CREATIVITY
                </h2>
                <p className="text-base sm:text-144 font-extralight text-white mb-8 whitespace-normal sm:whitespace-pre-line leading-snug tracking-widest">
                  We believe in sparking creativity that empowers individuals to
                  dream, act and envision <ResponsiveBr />a brighter future
                  leaving a lasting impact.
                  <ResponsiveBr />
                  Creativity is our driving force.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
