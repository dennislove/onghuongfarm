import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../images/logo.png';
import ButtonCall from '../Button/ButtonCall';
import { Link } from 'react-router-dom';

const navLink = [
  {
    title: 'Quầy',
    link: '/'
  },
  {
    title: 'Giới thiệu',
    link: '/gioi-thieu'
  },
  {
    title: 'Dịch vụ',
    link: '/dich-vu'
  },
  {
    title: 'Hình ảnh',
    link: '/hinh-anh'
  },
  {
    title: 'Liên hệ - Booking',
    link: '/booking'
  }
];

function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`bg-[#CDE8E5] text-gray-800 transition-all duration-300 ${
        isFixed
          ? 'fixed top-0 left-0 right-0 z-50 shadow-lg animate-moveTop'
          : ''
      }`}
    >
      <div className="container mx-auto md:px-40">
        <div className="flex items-center justify-between">
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-20 w-auto mr-4 rounded-full"
            />
          </div>

          <nav className="hidden md:flex space-x-6">
            {navLink.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className={`hover:text-[#4d869c] transition duration-300 ease-in-out text-[18px] font-bold relative group ${
                  activeItem === item.title ? ' underline' : ''
                }`}
              >
                {item.title}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#4d869c] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <ButtonCall />
          </div>
        </div>

        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            {navLink.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="hover:text-[#4d869c] block py-2 transition duration-300 ease-in-out text-[18px] font-bold "
                onClick={() => {
                  toggleMenu();
                  setActiveItem(item);
                }}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

export default HeaderComponent;
