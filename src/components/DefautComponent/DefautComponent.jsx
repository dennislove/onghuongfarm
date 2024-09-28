import React, { useEffect, useState } from 'react';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import Footer from '../Footer/Footer';
import ScrollToTop from '../HeaderComponent/ScrollToTop ';
import Letter from '../Letter';

function DefautComponent({ children }) {
  const [showLetter, setShowLetter] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowLetter(true);
    }, 500);

    setTimeout(() => {
      setShowText(true);
    }, 1500);
  }, []);

  const handleToggle = () => {
    setShowLetter(!showLetter);
  };
  return (
    <div className={` relative `}>
      {showLetter && (
        <Letter
          toggle={handleToggle}
          showLetter={showLetter}
          showText={showText}
        />
      )}
      <div className={` relative ${!showLetter ? '' : 'blur-[2px]'}`}>
        <div className=" absolute z-50 w-full">
          <HeaderComponent />
        </div>
        <div className="md:pt-10 pm:pt-0">
          {' '}
          {children}
          <Footer />
        </div>
        <div className=" absolute z-[51]">
          <ScrollToTop />
        </div>
      </div>
    </div>
  );
}

export default DefautComponent;
