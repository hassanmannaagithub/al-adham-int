'use client';

import Header from '@/components/Header';
import Image from 'next/image';

// Client data
const clients = [
  {
    id: 1,
    name: 'Dubai Television',
    logo: '/api/placeholder/140/90',
    alt: 'Dubai Television Logo'
  },
  {
    id: 2,
    name: 'ZEE',
    logo: '/api/placeholder/140/90',
    alt: 'ZEE Logo'
  },
  {
    id: 3,
    name: 'ATL',
    logo: '/api/placeholder/140/90',
    alt: 'ATL Logo'
  },
  {
    id: 4,
    name: 'Abu Dhabi TV',
    logo: '/api/placeholder/140/90',
    alt: 'Abu Dhabi TV Logo'
  },
  {
    id: 5,
    name: 'MBC Group',
    logo: '/api/placeholder/140/90',
    alt: 'MBC Group Logo'
  },
  {
    id: 6,
    name: 'Shahid',
    logo: '/api/placeholder/140/90',
    alt: 'Shahid Logo'
  },
  {
    id: 7,
    name: 'SBA',
    logo: '/api/placeholder/140/90',
    alt: 'SBA Logo'
  },
  {
    id: 8,
    name: 'twofour54',
    logo: '/api/placeholder/140/90',
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
      
      {/* Clients Section with dark overlay background */}
      <section className="bg-gradient-to-b from-gray-800 to-gray-900 py-16 relative">
        {/* Background image with overlay */}
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-20">OUR CLIENTS</h1>
          
          {/* Clients Grid Layout */}
          <div className="flex flex-col space-y-16">
            {/* First Row - 4 Clients */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
              {firstRowClients.map((client) => (
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
            <div className="w-32 h-1 bg-orange-500"></div>
          </div>
        </div>
      </section>
    </main>
  );
}