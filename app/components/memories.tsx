import React from 'react';
import gar1 from '@/public/images/gar2.jpeg';
import gar2 from '@/public/images/gar3.jpeg';
import gar3 from '@/public/images/gartunz1.jpeg';
import Image from 'next/image';

const Memories = () => {
  const memImg = [
    { src: gar1, alt: 'Gartunz performance' },
    { src: gar2, alt: 'Gartunz in studio' },
    { src: gar3, alt: 'Gartunz portrait' }
  ];

  return (
    <div className="container mx-auto px-4 ">
        <h1 className='text-xl sm:text-2xl md:text-3xl font-bold mt-8 mb-4 gradient-text'>Memories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {memImg.map((image, index) => (
          <div key={index} className="relative aspect-square overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              placeholder="blur"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Memories;