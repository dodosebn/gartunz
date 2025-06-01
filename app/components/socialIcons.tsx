import React from 'react';
import { FaInstagram, FaSpotify, FaYoutube, FaSoundcloud, FaApple } from 'react-icons/fa';

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
      url: 'https://open.spotify.com/artist/gartunz',
      icon: <FaSpotify />,
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/gartunz',
      icon: <FaYoutube />,
    },
    {
      name: 'SoundCloud',
      url: 'https://soundcloud.com/gartunz',
      icon: <FaSoundcloud />,
    },
    {
      name: 'Apple Music',
      url: 'https://music.apple.com/artist/gartunz',
      icon: <FaApple />,
    },
  ];

  return (
    <div className="flex gap-6 mt-8">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-black bg-opacity-10 flex items-center justify-center transition-all hover:bg-accent hover:-translate-y-1"
          aria-label={link.name}
        >
          <span className="text-xl text-white">{link.icon}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;