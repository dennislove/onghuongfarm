import React, { useState } from 'react';
import Map_1 from '../../images/ThanhHoaMap.svg';
import Map_2 from '../../images/DongSonMap.svg';
import Map_3 from '../../images/DongTienMap.svg';
import Map_4 from '../../images/NhuanTrachMap.svg';

const Card = ({ isOpen, onClick, image, name }) => {
  return (
    <div
      className={`flex flex-col gap-5 cursor-pointer relative transition-transform duration-500 ${
        isOpen
          ? 'transform translate-x-0 opacity-100'
          : 'transform translate-x-full opacity-0'
      }`}
      onClick={onClick}
    >
      {isOpen && (
        <iframe
          src="https://lottie.host/embed/34e25435-5bd8-4505-914a-db6a59d6c5e2/gvh7I3u7dh.json"
          className=" absolute items-center w-16 h-16 rounded-full cursor-pointer left-14 top-5 "
        ></iframe>
      )}

      <img src={image} alt="map" className="w-36 " />
      <h2 className=" font-semibold text-[18px]">{name}</h2>
    </div>
  );
};
const Contact = () => {
  const [openCard, setOpenCard] = useState(1);

  const handleCardClick = (cardNumber) => {
    if (openCard === cardNumber) {
      setOpenCard(cardNumber + 1);
    }
  };

  return (
    <section className="grid md:grid-cols-3 pm:grid-cols-1 gap-5  md:px-0 pm:ml-20">
      <div className=" col-span-1  flex flex-col md:border-r-2 md:border-b-0 pm:border-b-2 pm:border-r-0 px-10">
        <h2 className=" text-center font-semibold text-3xl mt-4 text-white">
          Liên hệ đặt lịch ngay tại
        </h2>
        <iframe src="https://lottie.host/embed/e59920f7-6a82-4272-828b-561a92f80c10/3vB0eIAG2h.json"></iframe>
        <div className=" flex pm:flex-col md:flex-row justify-center items-center gap-4">
          <img
            src="https://qrcode-gen.com/images/qrcode-default.png"
            alt="qr-code"
            className=" md:w-40 pm:w-60  mx-auto"
          />

          <div className="flex flex-col gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=100004020426505"
              target="blank"
              className="bg-[#3b5998] text-white px-3 py-1 rounded-md"
            >
              Nguyễn Hà Đông
            </a>
            <a
              href="https://www.facebook.com/OngHuongfarm"
              target="blank"
              className="bg-[#3b5998] text-white px-3 py-1 rounded-md mb-3"
            >
              Ông Hướng Farm
            </a>
          </div>
        </div>
      </div>

      <div
        className="col-span-2 text-white bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            'url(https://findart.edu.vn/wp-content/uploads/2022/02/nature-scene-with-river-hills-forest-mountain-landscape-flat-cartoon-style-illustration_1150-37326.jpg)'
        }}
      >
        <div className=" flex gap-1 justify-center md:flex-row pm:flex-col pt-4 ">
          <h2 className=" text-center font-semibold text-2xl ">Trải nghiệm</h2>
          <h2 className=" text-center font-semibold text-2xl">
            Ông Hướng Farm tại
          </h2>
        </div>
        <div className=" md:flex pm:grid pm:gap-5 justify-center items-end md:gap-20 py-10 overflow-hidden ">
          <Card
            isOpen={openCard >= 1}
            onClick={() => handleCardClick(1)}
            image={Map_1}
            name="tỉnh Thanh Hóa"
          />
          <Card
            isOpen={openCard >= 2}
            onClick={() => handleCardClick(2)}
            image={Map_2}
            name="huyện Đông Sơn"
          />
          <Card
            isOpen={openCard >= 3}
            onClick={() => handleCardClick(3)}
            image={Map_3}
            name="xã Đông Tiến"
          />
          <Card
            isOpen={openCard >= 4}
            onClick={() => handleCardClick(4)}
            image={Map_4}
            name="thôn Nhuận Trạch"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
