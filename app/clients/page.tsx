'use client';
import Image from 'next/image';

// Client data with customizable width and height for each logo
const clients = [
  {
    id: 1,
    name: 'Dubai Television',
    logo: '/clients/client-1.png',
    alt: 'Dubai Television Logo',
    width: 200, // Custom width for this logo
    height: 140 // Custom height for this logo
  },
  {
    id: 2,
    name: 'ZEE',
    logo: '/clients/client-2.png',
    alt: 'ZEE Logo',
    width: 140,
    height: 120
  },
  {
    id: 3,
    name: 'ATL',
    logo: '/clients/client-3.png',
    alt: 'ATL Logo',
    width: 130,
    height: 100
  },
  {
    id: 4,
    name: 'Abu Dhabi TV',
    logo: '/clients/client-4.png',
    alt: 'Abu Dhabi TV Logo',
    width: 250,
    height: 125
  },
  {
    id: 5,
    name: 'MBC Group',
    logo: '/clients/client-5.png',
    alt: 'MBC Group Logo',
    width: 270,
    height: 135
  },
  {
    id: 6,
    name: 'Shahid',
    logo: '/clients/client-6.png',
    alt: 'Shahid Logo',
    width: 230,
    height: 115
  },
  {
    id: 7,
    name: 'SBA',
    logo: '/clients/client-7.png',
    alt: 'SBA Logo',
    width: 245,
    height: 122
  },
  {
    id: 8,
    name: 'twofour54',
    logo: '/clients/client-8.png',
    alt: 'twofour54 Logo',
    width: 255,
    height: 127
  }
];

export default function ClientsPage() {
  // Split clients into two rows (4 clients per row)
  const firstRowClients = clients.slice(0, 4);
  const secondRowClients = clients.slice(4, 8);
  
  return (
    <div className="min-h-screen">
      {/* Clients Section with background image and dark overlay */}
      <section className="relative min-h-screen flex flex-col">
        {/* Background image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/clients/imgs/clients-background.jpg')"
          }}
        ></div>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 z-0" style={{ backgroundColor: '#303030', opacity: 0.84 }}></div>
        
        {/* Title section - completely separate from content */}
        <div className="container mx-auto px-4 relative z-10 pt-20">
          {/* You can adjust the margin-top/padding-top here to move the title up/down */}
          <h1 className="tracking-widest text-super-title md:text-super-title font-extralight text-center text-white mt-36">
            OUR CLIENTS
          </h1>
        </div>
        
        {/* Content section - completely separate from title */}
        <div className="container mx-auto px-4 relative z-10 flex-grow mt-20">
          {/* Clients Grid Layout - Centered on md screens and up */}
          <div className="flex flex-col space-y-8 md:max-w-4xl md:mx-auto">
            {/* First Row - 4 Clients */}
            <div className="grid grid-cols-4">
              {firstRowClients.map((client) => (
                <div key={client.id} className="flex justify-center">
                  {/* Minimum 300px width container with styling */}
                  <div 
                    className="p-4 flex items-center justify-center" 
                    style={{ 
                      minWidth: '300px', 
                      width: '100%',
                      backgroundColor: 'rgba(255, 255, 255, 0)' // equivalent to bg-white bg-opacity-0
                    }}
                  >
                    <Image 
                      src={client.logo}
                      width={client.width}
                      height={client.height}
                      alt={client.alt}
                      className="object-contain"
                      style={{ maxHeight: '6rem' }} // equivalent to max-h-24
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Second Row - 4 Clients */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-6">
              {secondRowClients.map((client) => (
                <div key={client.id} className="flex justify-center">
                  {/* Minimum 300px width container with styling */}
                  <div 
                    className="p-4 flex items-center justify-center" 
                    style={{ 
                      minWidth: '300px', 
                      width: '100%',
                      backgroundColor: 'rgba(255, 255, 255, 0)' // equivalent to bg-white bg-opacity-0
                    }}
                  >
                    <Image 
                      src={client.logo}
                      width={client.width}
                      height={client.height}
                      alt={client.alt}
                      className="object-contain"
                      style={{ maxHeight: '6rem' }} // equivalent to max-h-24
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Divider Line - Hidden on small screens, visible from md breakpoint and up */}
          <div className="flex justify-center mt-20">
            <div className="hidden md:block w-64 h-3 bg-[#ed7e0c]"></div>
          </div>
        </div>
      </section>
    </div>
  );
}