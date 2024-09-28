import React from 'react';
import logo from '../../images/logo.png';

const Footer = () => {
  return (
    <footer className=" absolute z-50 w-full">
      <div className="relative mt-10 bg-gray-900 px-4 pt-10 ">
        <div className="absolute -top-10 left-1/2 h-16 w-16 -translate-x-1/2 rounded-xl border-4 border-sky-500 bg-white p-2">
          <img className="h-full object-contain" src={logo} alt="logo" />
        </div>

        <div className="flex justify-center md:flex-row pm:flex-col gap-1">
          <p className=" text-center text-gray-300 ">© 2024 OHFCoffee </p>
          <p className=" text-center text-gray-300 pb-10">
            | Bản quyền thuộc Ông Hướng Farm
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
