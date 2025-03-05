'use client';
import Header from '@/components/Header';
import Image from 'next/image';

// Client data
const clients = [
  {
    id: 1,
    name: 'Dubai Television',
    logo: '/clients/client-1.png',
    alt: 'Dubai Television Logo'
  },
  {
    id: 2,
    name: 'ZEE',
    logo: '/clients/client-2.png',
    alt: 'ZEE Logo'
  },
  {
    id: 3,
    name: 'ATL',
    logo: '/clients/client-3.png',
    alt: 'ATL Logo'
  },
  {
    id: 4,
    name: 'Abu Dhabi TV',
    logo: '/clients/client-4.png',
    alt: 'Abu Dhabi TV Logo'
  },
  {
    id: 5,
    name: 'MBC Group',
    logo: '/clients/client-5.png',
    alt: 'MBC Group Logo'
  },
  {
    id: 6,
    name: 'Shahid',
    logo: '/clients/client-6.png',
    alt: 'Shahid Logo'
  },
  {
    id: 7,
    name: 'SBA',
    logo: '/clients/client-7.png',
    alt: 'SBA Logo'
  },
  {
    id: 8,
    name: 'twofour54',
    logo: '/clients/client-8.png',
    alt: 'twofour54 Logo'
  }
];

export default function ClientsPage() {
  // Split clients into two rows (4 clients per row)
  const firstRowClients = clients.slice(0, 4);
  const secondRowClients = clients.slice(4, 8);
  
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Clients Section with background image and dark overlay */}
      <section className="py-16 relative min-h-screen flex items-center">
        {/* Background image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/clients/our-clients-background.webp')"
          }}
        ></div>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 z-0" style={{ backgroundColor: '#303030', opacity: 0.84 }}></div>
        
        <div className="container mx-auto px-4 relative z-10 w-full">
          {/* Section Title */}
          <h1 className="text-super-title md:text-super-title font-light text-center text-white mb-20">OUR CLIENTS</h1>
          
          {/* Clients Grid Layout - Centered on md screens and up */}
          <div className="flex flex-col space-y-16 md:max-w-4xl md:mx-auto">
            {/* First Row - 4 Clients */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
              {firstRowClients.map((client) => (
                <div key={client.id} className="flex justify-center">
                  <div className="bg-white bg-opacity-0 p-4 flex items-center justify-center">
                    <Image 
                      src={client.logo}
                      width={200}
                      height={100}
                      alt={client.alt}
                      className="max-h-16 object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Second Row - 4 Clients */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
              {secondRowClients.map((client) => (
                <div key={client.id} className="flex justify-center">
                  <div className="bg-white bg-opacity-0 p-4 flex items-center justify-center">
                    <Image 
                      src={client.logo}
                      width={140}
                      height={80}
                      alt={client.alt}
                      className="max-h-16 object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Divider Line */}
          <div className="flex justify-center mt-16">
            <div className="w-64 h-3 bg-orange-500"></div>
          </div>
        </div>
      </section>
    </main>
  );
}