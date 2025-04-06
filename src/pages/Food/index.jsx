import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Link } from 'react-router-dom';

const FoodMenu = () => {
  const featuredDishes = [
    {
      name: 'Bạch tuộc chiên',
      img: 'https://khaihoanphuquoc.com.vn/wp-content/uploads/2023/11/bach-tuoc-chien-nuoc-mam-1.jpg',
      desc: 'Giòn rụm, thơm ngon'
    },
    {
      name: 'Gà sốt cay',
      img: 'https://cdn.tgdd.vn/2021/08/CookProduct/thumb-1200x676-54.jpg',
      desc: 'Cay nồng, hấp dẫn'
    },
    {
      name: 'Mỳ bò hầm',
      img: 'https://khaihoanphuquoc.com.vn/wp-content/uploads/2023/11/bach-tuoc-chien-nuoc-mam-1.jpg',
      desc: 'Thơm béo, đậm vị'
    },
    {
      name: 'Cơm sườn nướng',
      img: 'https://khaihoanphuquoc.com.vn/wp-content/uploads/2023/11/bach-tuoc-chien-nuoc-mam-1.jpg',
      desc: 'Đậm đà, hấp dẫn'
    },
    {
      name: 'Lẩu Thái hải sản',
      img: 'https://cdn.tgdd.vn/Files/2019/07/26/1181815/lau-thai-hai-san-chua-chua-cay-cay-danh-bay-cai-lanh-202111161130260017.jpg',
      desc: 'Chua cay, nóng hổi'
    }
  ];
  const menuFoods = [
    {
      title: 'Món chiên',
      img: 'https://khaihoanphuquoc.com.vn/wp-content/uploads/2023/11/bach-tuoc-chien-nuoc-mam-1.jpg',
      url: 'mon-chien'
    },
    {
      title: 'Món nước',
      img: 'https://cdn.tgdd.vn/2021/08/CookProduct/thumb-1200x676-54.jpg',
      url: 'mon-nuoc'
    },
    {
      title: 'Món lẩu',
      img: 'https://khaihoanphuquoc.com.vn/wp-content/uploads/2023/11/bach-tuoc-chien-nuoc-mam-1.jpg',
      url: 'mon-lau'
    },
    {
      title: 'Tráng miệng',
      img: 'https://cdn.tgdd.vn/Files/2019/07/26/1181815/lau-thai-hai-san-chua-chua-cay-cay-danh-bay-cai-lanh-202111161130260017.jpg',
      url: 'trang-mieng'
    }
  ];
  const [title, setTitle] = useState('Trưa nay ăn gì?');
  const updateTitle = () => {
    // Lấy thời gian hiện tại theo múi giờ Việt Nam (UTC+7)
    const now = new Date();
    const vietnamTime = new Date(
      now.toLocaleString('en-US', { timeZone: 'Asia/Ho_Chi_Minh' })
    );
    const hours = vietnamTime.getHours();

    // Cập nhật tiêu đề dựa trên giờ
    if (hours >= 9 && hours <= 13) {
      setTitle('Trưa nay ăn gì?');
    } else if (hours >= 15 && hours <= 21) {
      setTitle('Tối nay ăn gì?');
    } else {
      setTitle('Hôm nay ăn gì?');
    }
  };

  // Cập nhật tiêu đề khi component mount và mỗi phút
  useEffect(() => {
    updateTitle(); // Gọi ngay khi mount
    const interval = setInterval(updateTitle, 60000); // Cập nhật mỗi phút

    // Cleanup interval khi component unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-[#fffef2] max-w-8xl min-h-screen p-4 space-y-8 ">
      <section className="rounded-xl overflow-hidden w-full mx-auto px-4 sm:px-6 lg:px-8 sm:mt-20 lg:mt-0  ">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000 }}
          loop={true}
          slidesPerView={1}
        >
          {featuredDishes.map((dish, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#f7f4c9] px-4 pt-10 sm:mt-20 sm:p-6 md:p-8 lg:p-10 text-center flex flex-col items-center justify-center rounded-xl ">
                <img
                  src={dish.img}
                  alt={dish.name}
                  className="rounded-lg w-full max-h-[300px] sm:max-h-[400px] object-cover mb-4"
                />
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
                  {dish.name}
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 italic mt-1 max-w-xl">
                  {dish.desc}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      {/* Section 2: Nhóm món ăn */}
      <section className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-4 overflow-x-auto">
          {menuFoods.map((item, i) => (
            <div key={i} className="relative w-56 flex-shrink-0">
              {i === 0 && (
                <div
                  className="absolute clip-[polygon(0_37%,_37%_0,_63%_0,_0_63%)] bg-red-500 w-40 h-40 "
                  style={{ clipPath: 'polygon(0 37%, 37% 0, 63% 0, 0 63%)' }}
                >
                  <span className=" text-white -rotate-[45deg] text-base absolute top-7 left-2">
                    Món mới
                  </span>
                </div>
              )}
              <Link
                to={item.url}
                className="w-full  bg-gray-300 bg-cover rounded-lg mb-2"
              >
                <img src={item.img} alt="" className="bg-cover" />
              </Link>
              <p className="text-center text-[18px] font-medium">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* Section 3: Gợi ý theo thời điểm */}
      <section className="text-center w-full mx-auto px-4 sm:px-4 lg:px-8">
        <h2
          className="text-2xl font-semibold italic
        "
        >
          {title}
        </h2>
        <div className="flex flex-col justify-center  mt-4 ">
          {['Cơm rang', 'Lẩu ếch', 'Cua đồng', 'Gà đập lu'].map((item, i) => (
            <div key={i} className="w-full">
              <div className="h-44 mt-4 bg-gray-300 rounded-lg mb-1"></div>
              <p className="text-sm font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FoodMenu;
