import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 border-b border-opacity-10 border-white">
      <Link href='#socials'><div className="text-3xl font-bold text-accent">GT</div></Link>
      <div>
        <ul className='flex gap-3 cursor-pointer'>
        {  ['JOIN NEWSLETTER', 'MUSIC', 'VIDEO', 'TOUR'].map((itm, ndx) => (
          <li key={ndx} className={`hover:border-b-[#000] hover:border-b-1
             ${itm === 'JOIN NEWSLETTER' && 'hover:border-1 hover:bg-amber-700 hover:border-[#000] px-3 rounded-'}`}> {itm}</li>
        ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;