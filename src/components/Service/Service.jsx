import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi2';
import './index.css';

const testimonials = [
  {
    id: 1,
    title: 'Lều lưu trú',
    quote:
      'I was extremely impressed with the smart home repair and service provided by HomePro. Their technicians were prompt, knowledgeable, and resolved my issues efficiently. I highly recommend their exceptional service for all smart home needs.',
    name: 'Ông Hướng Farm',
    image:
      'https://smilemedia.vn/wp-content/uploads/2022/08/Concept-Happy-Farm.jpg', // replace with the actual path
    rating: 5
  },
  {
    id: 2,
    title: 'Ăn uống',
    quote:
      'I was extremely impressed with the smart home repair and service provided by HomePro. Their technicians were prompt, knowledgeable, and resolved my issues efficiently. I highly recommend their exceptional service for all smart home needs.',
    name: 'Ông Hướng Farm',
    image:
      'https://smilemedia.vn/wp-content/uploads/2022/08/Concept-Happy-Farm.jpg', // replace with the actual path
    rating: 4
  },
  {
    id: 3,
    title: 'Đua xe mini',
    quote:
      'I was extremely impressed with the smart home repair and service provided by HomePro. Their technicians were prompt, knowledgeable, and resolved my issues efficiently. I highly recommend their exceptional service for all smart home needs.',
    name: 'Ông Hướng Farm',
    image:
      'https://smilemedia.vn/wp-content/uploads/2022/08/Concept-Happy-Farm.jpg', // replace with the actual path
    rating: 4
  },
  {
    id: 4,
    title: 'Tô tượng',
    quote:
      'I was extremely impressed with the smart home repair and service provided by HomePro. Their technicians were prompt, knowledgeable, and resolved my issues efficiently. I highly recommend their exceptional service for all smart home needs.',
    name: 'Ông Hướng Farm',
    image:
      'https://smilemedia.vn/wp-content/uploads/2022/08/Concept-Happy-Farm.jpg', // replace with the actual path
    rating: 4
  },
  {
    id: 5,
    title: 'Tổ chức sự kiện',
    quote:
      'I was extremely impressed with the smart home repair and service provided by HomePro. Their technicians were prompt, knowledgeable, and resolved my issues efficiently. I highly recommend their exceptional service for all smart home needs.',
    name: 'Ông Hướng Farm',
    image:
      'https://smilemedia.vn/wp-content/uploads/2022/08/Concept-Happy-Farm.jpg', // replace with the actual path
    rating: 4
  }
  // You can add more testimonials here
];

const Service = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6 pt-20 md:pb-[220px] pm:pb-30 flex md:flex-row pm:flex-col items-center justify-between">
      <div className="flex-1">
        <h2 className="text-white mb-5 text-center font-semibold md:text-6xl pm:text-5xl uppercase ">
          dịch vụ
        </h2>
        <TransitionGroup className="relative w-full mx-4">
          <CSSTransition
            key={testimonials[currentIndex].id}
            timeout={500}
            classNames="fade"
          >
            <div>
              <span className="bg-blue-200 text-blue-700 rounded-full font-semibold px-4 py-1 text-xl mb-2 inline-block">
                {testimonials[currentIndex].title}
              </span>
              <p className="text-lg italic mb-4">
                "{testimonials[currentIndex].quote}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
                />
                <div className="ml-4">
                  <h3 className="text-md font-semibold">
                    {testimonials[currentIndex].name}
                  </h3>
                  <div className="flex">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 ${
                          index < testimonials[currentIndex].rating
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927a1 1 0 011.902 0l1.308 4.034a1 1 0 00.95.69h4.242c.8 0 1.13 1.04.487 1.511l-3.401 2.383a1 1 0 00-.364 1.118l1.308 4.034c.246.762-.616 1.393-1.25.922l-3.401-2.383a1 1 0 00-1.172 0l-3.401 2.383c-.634.471-1.496-.16-1.25-.922l1.308-4.034a1 1 0 00-.364-1.118L2.364 9.163c-.643-.47-.313-1.51.487-1.51h4.242a1 1 0 00.95-.69l1.308-4.035z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CSSTransition>
        </TransitionGroup>
        <div className="flex space-x-4 mt-6 ">
          <button
            onClick={prevSlide}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none"
          >
            <HiChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none"
          >
            <HiChevronRight />
          </button>
        </div>
      </div>
      <div className="flex-1 relative md:mt-0 pm:mt-10">
        <TransitionGroup className="relative w-full h-full">
          <CSSTransition
            key={testimonials[currentIndex].id}
            timeout={500}
            classNames="fade"
          >
            <div className="relative flex md:flex-1 pm:flex-col justify-center items-center">
              <div className="w-84 h-64 rounded-lg overflow-hidden shadow-lg ">
                <img
                  src={testimonials[currentIndex].image}
                  alt="Room"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="md:w-64 pm:w-84 h-64 md:absolute md:mt-0 pm:mt-3 top-1/2 left-[65%] rounded-lg overflow-hidden shadow-lg">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
};

export default Service;
