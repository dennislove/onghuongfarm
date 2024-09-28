import React from 'react';
import Banner from '../../components/Banner/Banner';
import Menu from '../../components/Menu/Menu';
import Service from '../../components/Service/Service';
import Active from '../../components/Active/Active';
import Contact from '../../components/Contact/Contact';

function HomePage() {
  return (
    <div className="bg-[#EEF7FF] pt-10 ">
      <div className="bg-primary ">
        <Banner />
      </div>

      <Menu />

      <div className="bg-[#86A789] ">
        <Service />
      </div>

      <div className="bg-[#808D7C] pt-5">
        <Active />
      </div>
      <div className="bg-[#739072] ">
        <Contact />
      </div>
    </div>
  );
}

export default HomePage;
