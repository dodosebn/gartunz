import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center py-8 border-t border-opacity-10 border-white mt-8 font-light opacity-60">
      &copy; {new Date().getFullYear()} Gar Tunz. All rights reserved.
    </footer>
  );
};

export default Footer;