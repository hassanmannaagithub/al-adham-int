"use client";

export default function ContactsContent() {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex flex-col">
        <div
          className="absolute inset-0 z-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('contacts/background.webp')",
            backgroundPosition: "center 45%",
          }}
        ></div>

        <div
          className="absolute inset-0 z-0"
          style={{ backgroundColor: "#303030", opacity: 0.84 }}
        ></div>

        <div className="container mx-auto px-4 relative z-10 pt-28">
          <h1 className="tracking-widest text-4xl md:text-super-title font-extralight text-center text-white mt-16 md:mt-36">
            CONTACTS
          </h1>
        </div>

        <div className="container mx-auto px-4 relative z-10 flex-grow mt-12 md:mt-24">
          <div className="flex flex-col items-center text-white text-center">
            <div className="text-xl md:text-2xl font-normal tracking-wide mb-8">
              Dubai Media City- Headquarters Building No.5- Ground Floor
            </div>

            <div className="text-xl md:text-2xl font-normal mb-8 tracking-wide">
              +971 555613732
            </div>

            <div className="flex flex-col space-y-2 mb-24 tracking-wide">
              <a
                href="mailto:Moumen.almalla@aladham-int.com"
                className="text-xl md:text-2xl font-normal text-[#ed7e0c] hover:text-[#ff9f2b] transition-colors"
              >
                Moumen.almalla@aladham-int.com
              </a>
              <a
                href="mailto:ruba.almalla@aladham-int.com"
                className="text-xl md:text-2xl font-normal text-[#ed7e0c] hover:text-[#ff9f2b] transition-colors"
              >
                ruba.almalla@aladham-int.com
              </a>
            </div>

            <div className="flex justify-center">
              <div className="w-64 h-3 bg-white"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
