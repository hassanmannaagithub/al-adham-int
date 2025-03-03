// app/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="bg-[#5c1816] text-white">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="mr-2">
              <Image src="/api/placeholder/90/90" width={90} height={90} alt="Al Adham Productions Logo" className="rounded-full bg-orange-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-light">al adham</span>
              <span className="text-lg uppercase tracking-widest">productions</span>
            </div>
          </div>
          
          <nav className="flex flex-wrap justify-center md:justify-end items-center gap-4 md:gap-8">
            <Link href="#" className="uppercase font-medium text-sm hover:text-orange-400 transition-colors">Our Production</Link>
            <Link href="#" className="uppercase font-medium text-sm hover:text-orange-400 transition-colors">Our Clients</Link>
            <Link href="#" className="uppercase font-medium text-sm hover:text-orange-400 transition-colors">Abouts Us</Link>
            <Link href="#" className="uppercase font-medium text-sm hover:text-orange-400 transition-colors">Our Team</Link>
            <Link href="#" className="uppercase font-medium text-sm hover:text-orange-400 transition-colors">Services</Link>
            <Link href="#" className="uppercase font-medium text-sm hover:text-orange-400 transition-colors">Contacts</Link>
            <button aria-label="Search" className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
          </nav>
        </div>
      </header>
      
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image 
            src="/background-family.webp" 
            alt="Family watching projection" 
            fill 
            priority
            className="object-cover brightness-75"
          />
        </div>
        
        <div className="relative container mx-auto px-8 h-full flex flex-col justify-center">
          <div className="max-w-md text-white">
            <h1 className="text-6xl font-bold mb-2">
              OUR VISION
              <br />
              <span className="text-7xl">IS BRIGHT</span>
            </h1>
            <p className="text-xl mb-8">
              To artfully tell stories that are deeply rooted, 
              close to reality, loaded with value to move 
              people's lives.
            </p>
            <Link href="#" className="bg-orange-500 hover:bg-orange-600 transition-colors text-white uppercase font-bold px-8 py-4 inline-block">
              Know More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}