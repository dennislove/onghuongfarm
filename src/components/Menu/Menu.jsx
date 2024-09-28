import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GiTwoCoins } from 'react-icons/gi';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { FreeMode, Pagination } from 'swiper/modules';

import image1 from '../../images/1.png';
import image2 from '../../images/2.png';
import image3 from '../../images/3.png';
import image5 from '../../images/5.png';
import image6 from '../../images/6.png';
import image7 from '../../images/7.png';

const Menu = () => {
  const ServiceData = [
    {
      title: 'cafe',
      item: [
        {
          url: image1,
          name: ' nâu',
          price: '25,000'
        },
        {
          url: image2,
          name: ' đen',
          price: '25,000'
        },
        {
          url: image3,
          name: 'bạc xỉu',
          price: '35,000'
        },

        {
          url: image5,
          name: 'cốt dừa',
          price: '35,000'
        },
        {
          url: image6,
          name: 'trứng',
          price: '35,000'
        },
        {
          url: image7,
          name: 'muối',
          price: '35,000'
        }
      ]
    },
    {
      title: 'soda',
      item: [
        {
          url: image1,
          name: 'việt quất',
          price: '25,000'
        },
        {
          url: image2,
          name: 'nhiệt đới',
          price: '25,000'
        },
        {
          url: image3,
          name: 'chanh bạc hà',
          price: '25,000'
        }
      ]
    },
    {
      title: 'sinh tố',
      item: [
        {
          url: image1,
          name: 'bơ matcha',
          price: '55,000'
        },
        {
          url: image2,
          name: 'xoài',
          price: ' 40,000'
        },
        {
          url: image3,
          name: 'chanh leo',
          price: ' 40,000'
        }
      ]
    },
    {
      title: 'sữa tươi trân châu',
      item: [
        {
          url: image1,
          name: 'matcha',
          price: '45,000'
        },
        {
          url: image2,
          name: 'hoa đậu biếc',
          price: '45,000'
        },
        {
          url: image3,
          name: 'đường đen nướng',
          price: '45,000'
        }
      ]
    },
    {
      title: 'đá xay',
      item: [
        {
          url: image1,
          name: 'caramel',
          price: '45,000'
        },
        {
          url: image2,
          name: 'matcha',
          price: '45,000'
        },
        {
          url: image3,
          name: 'cookies',
          price: '45,000'
        }
      ]
    },
    {
      title: 'sữa chua',
      item: [
        {
          url: image1,
          name: 'chanh leo',
          price: ' 40,000'
        },
        {
          url: image2,
          name: 'đánh đá',
          price: ' 40,000'
        },
        {
          url: image3,
          name: 'việt quất',
          price: '45,000'
        },
        {
          url: image3,
          name: 'cafe',
          price: ' 40,000'
        },
        {
          url: image3,
          name: 'chanh tuyết',
          price: ' 40,000'
        },
        {
          url: image3,
          name: 'thanh long xoài',
          price: '45,000'
        }
      ]
    },
    {
      title: 'trà',
      item: [
        {
          url: image1,
          name: 'đào cam sả',
          price: '45,000'
        },
        {
          url: image2,
          name: 'vải nha đam',
          price: ' 40,000'
        },
        {
          url: image3,
          name: 'thanh long bưởi hồng',
          price: '45,000'
        },
        {
          url: image3,
          name: 'kem trứng nướng',
          price: '45,000'
        }
      ]
    },
    {
      title: 'nước ép',
      item: [
        {
          url: image1,
          name: 'cam',
          price: '45,000'
        },
        {
          url: image2,
          name: 'dứa',
          price: ' 40,000'
        },
        {
          url: image3,
          name: 'dưa hấu',
          price: ' 40,000'
        },
        {
          url: image3,
          name: 'quất nha đam',
          price: ' 40,000'
        },
        {
          url: image3,
          name: 'chanh leo',
          price: ' 40,000'
        }
      ]
    },
    {
      title: 'cacao',
      item: [
        {
          url: image1,
          name: 'nóng',
          price: '35,000'
        },
        {
          url: image2,
          name: 'lạnh',
          price: '35,000'
        },
        {
          url: image3,
          name: 'trứng',
          price: ' 40,000'
        }
      ]
    },
    {
      title: 'topping',
      item: [
        {
          url: image1,
          name: 'trân châu',
          price: ' 10,000'
        },
        {
          url: image2,
          name: 'nha đam',
          price: ' 10,000'
        },
        {
          url: image3,
          name: 'đào',
          price: ' 10,000'
        }
      ]
    }
  ];
  const [hiddenTitle, setHiddenTitle] = useState('cafe');
  // Handler to update the selected title
  const handleTitleClick = (title) => {
    setHiddenTitle(hiddenTitle === title ? '' : title);
  };

  // Find the selected items based on the selected title
  const selectedItems = ServiceData.find(
    (service) => service.title === hiddenTitle
  ).item;

  return (
    <div className="flex items-center py-10 justify-center flex-col  bg-[#9CA986] mx-auto">
      {ServiceData.map((service) => (
        <div>
          {hiddenTitle == service.title && (
            <h2
              className="text-[#3A4D39]  mb-5 text-center font-semibold md:text-6xl pm:text-5xl uppercase"
              key={service.title}
            >
              {hiddenTitle}
            </h2>
          )}
        </div>
      ))}
      <div className=" pm:overflow-hidden md:w-auto pm:w-[300px] bg-[#E7E8D8] pm:overflow-x-auto shadow-md rounded-lg  scrollbar scrollbar-thumb-[#3A4D39] scrollbar-custom mb-5 mx-auto">
        <style>
          {`
          .scrollbar-custom::-webkit-scrollbar {
            height: 3px;
          }
          
        `}
        </style>
        <div className="space-x-2 flex ">
          {ServiceData.map((service) => (
            <>
              {hiddenTitle !== service.title && (
                <a
                  key={service.title}
                  onClick={() => handleTitleClick(service.title)}
                  className="px-4 py-3 mb-2 inline-block  font-medium rounded-lg capitalize cursor-pointer whitespace-nowrap text-black  hover:bg-[#739072]"
                >
                  {service.title}
                </a>
              )}
            </>
          ))}
        </div>
      </div>
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 30
          },
          800: {
            slidesPerView: 2,
            spaceBetween: 15
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20
          }
        }}
        freeMode={true}
        pagination={{
          clickable: true
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {selectedItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col gap-6 mb-20 ml-5 bg-[#E7E8D8] group relative shadow-lg rounded-xl pl-6 py-8 h-[450px] w-[215px]  md:w-[350px] pm:w-[280px] overflow-hidden cursor-pointer mx-auto">
              <img src={item.url} alt="" className="w-[68%] mx-auto ml-16" />

              <div
                className=" absolute top-[40%] text-center -left-[35%] w-full md:text-5xl leading-[42px] pm:text-[44px] font-semibold capitalize rotate-90 "
                style={{
                  WebkitTextStroke: '2px #5F6F52',
                  color: 'transparent'
                }}
              >
                {item.name}
              </div>
              <h2 className=" flex gap-2 justify-center items-center text-2xl font-semibold text-[#B2533E] ">
                {item.price} <GiTwoCoins color="#ECB159" size={25} />
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Menu;
