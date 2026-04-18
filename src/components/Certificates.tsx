'use client';

import Image from 'next/image';

export default function Certificates() {
  const certificates = [
    {
      id: 1,
      title: 'Certificate 1',
      image: '/10af.PNG',
    },
    {
      id: 2,
      title: 'Certificate 2',
      image: '/10aj.PNG',
    },
  ];

  return (
    <section id="certificates" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Certificates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative w-full h-[400px]">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
