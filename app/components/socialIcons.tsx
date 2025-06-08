import React from 'react';
import { FaInstagram, FaSpotify, FaYoutube, FaSoundcloud, FaApple } from 'react-icons/fa';
import { SiAudiomack, SiFacebook, SiTiktok } from 'react-icons/si';

type SocialLink = {
  name: string;
  url: string;
  icon: React.ReactNode;
};

const SocialIcons = () => {
  const socialLinks: SocialLink[] = [
    {
      name: 'Instagram',
      url: 'https://instagram.com/gartunz',
      icon: <FaInstagram />,
    },
    {
      name: 'Spotify',
      url: 'https://open.spotify.com/artist/595lK4RPU9xZYRUfZ8HyUa',
      icon: <FaSpotify />,
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@Gartunso',
      icon: <FaYoutube />,
    },
    {
      name: 'AudioMack',
      url: 'https://audiomack.com/gartunso',
      icon: <SiAudiomack />,
    },
    {
      name: 'Apple Music',
      url: 'https://music.apple.com/ng/artist/gartunso/1780047390',
      icon: <FaApple />,
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@gartunsooffical?_t=ZM-8wKgOPsWHpe&_r=1',
      icon: <SiTiktok />
    },
    {
      name: 'FaceBook',
      url: 'https://web.facebook.com/Gartunso?_rdc=1&_rdr#',
      icon: <SiFacebook />
    }
  ];

  return (
    <section className='p-4 md:p-[3rem]'>
      <div className="flex flex-wrap justify-center gap-4 md:gap-6" id='socials'>
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black bg-opacity-10 flex items-center
             justify-center transition-all hover:bg-accent hover:-translate-y-1"
            aria-label={link.name}
          >
            <span className="text-lg md:text-xl text-white">{link.icon}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SocialIcons;