import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center text-[#f1f1f1]  border-t border-opacity-10
     border-white  font-light pb-3">
      &copy; {new Date().getFullYear()} GarTunso. All rights reserved.
    </footer>
  );
};

export default Footer;