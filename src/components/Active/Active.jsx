import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Active = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const farmData = [
    {
      id: 1,
      title: 'Our Beautiful Farm',
      description:
        'Welcome to Green Acres, where nature and sustainable farming practices come together to create a harmonious ecosystem.',
      image:
        'https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 2,
      title: 'Fresh Produce',
      description:
        'Our farm produces a wide variety of organic fruits and vegetables, harvested at peak freshness for the best flavor and nutrition.',
      image:
        'https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 3,
      title: 'Happy Animals',
      description:
        'Our animals are raised with care and respect, ensuring their well-being and producing high-quality, ethically sourced products.',
      image:
        'https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80'
    },
    {
      id: 4,
      title: 'Farm Life',
      description:
        'Experience the charm of rural living and learn about sustainable farming practices through our educational programs and farm tours.',
      image:
        'https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % farmData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + farmData.length) % farmData.length);
  };

  return (
    <div className="bg-green-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-green-800 mb-12">
          Welcome to Our Farm
        </h1>
        <div className="relative" ref={ref}>
          <motion.div
            className="overflow-hidden rounded-lg shadow-xl"
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 }
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-96 sm:h-[28rem]">
              {farmData.map((item, index) => (
                <motion.div
                  key={item.id}
                  className={`absolute inset-0 w-full h-full flex items-center justify-center ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === currentSlide ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <h2 className="text-3xl font-bold mb-2">{item.title}</h2>
                      <p className="text-lg">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200 ease-in-out"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="text-green-800 text-2xl" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200 ease-in-out"
            aria-label="Next slide"
          >
            <FaChevronRight className="text-green-800 text-2xl" />
          </button>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {farmData.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Active;
