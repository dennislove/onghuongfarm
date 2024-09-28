import React, { useState, useEffect } from 'react';
import { HiChevronDoubleUp } from 'react-icons/hi2';
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Improved visibility logic considering different scroll positions
  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 100); // Adjust threshold as needed
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={` fixed bottom-10 w-14 h-14 right-10 px-4 py-2 rounded-full bg-[#84a29e] shadow-lg hover:bg-primary text-white focus:outline-none ${
        !isVisible && 'hidden'
      }`}
      onClick={handleClick}
    >
      <HiChevronDoubleUp size={23} />
    </button>
  );
};

export default ScrollToTop;
