import React, { useState, useEffect } from 'react';
import { HiOutlinePlus } from 'react-icons/hi2';
const letterText = [
  'Cảm ơn bạn vì đã đến',
  'Cảm ơn bạn vì đã lắng nghe',
  'Cảm ơn những chia sẻ, cảm ơn những lời chúc mừng',
  'Hành trình của Chuyện Thanh Xuân mới chỉ bắt đầu - anh thanh niên hồ hởi xông xáo, ôm hoài bão lớn và trái tim liều lĩnh bước vào đời. Con đường sau này chắn hẳn còn nhiều bão tố, vẫn mong mỏi quý vị sẽ đồng hành cùng Chuyện Thanh Xuân. ',
  'Một đêm nhạc đã đi qua, chúng tôi hạnh phúc vì được mọi người đón nhận. Cảm thấy thành công khi gieo được vào lòng bạn một hạt mầm tình cảm.',
  'Chúng tôi vẫn còn rất nhiều những thiếu xót trong công tác tổ chức. Nếu làm quý vị chưa hài lòng, xin hãy thứ lỗi cho chút ngây dại thuở ban đầu....'
];

const Letter = ({ toggle, showLetter, showText }) => {
  return (
    <div className="flex items-center justify-center fixed z-[60] md:left-1/2 md:-translate-x-1/2 md:top-[10%]">
      {/* Lá thư */}
      <div
        className={`relative md:h-full pm:h-[50%] overflow-hidden md:w-fit lg:w-1/2 pm:w-[90%] bg-no-repeat bg-cover origin-top transform rounded-lg bg-white p-8 shadow-2xl transition-all duration-1000 ease-out ${
          showLetter ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
        }`}
        style={{
          backgroundImage: `url('https://toigingiuvedep.vn/wp-content/uploads/2021/01/hinh-background-giay-cu-vang-o.jpg')`, // Sử dụng cùng một texture để đồng bộ nếp gấp
          backgroundColor: '#f9f7f1' // Màu nền giấy cổ điển
        }}
      >
        <div
          className=" absolute rotate-45 top-0 right-0 m-2 bg-white rounded-full cursor-pointer"
          onClick={toggle}
        >
          <HiOutlinePlus size={30} />
        </div>
        {/* Nội dung lá thư */}
        <div
          className={`h-full overflow-hidden transition-opacity duration-1000 ease-out ${
            showText ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="text-lg text-black">
            <h2 className=" text-center md:text-5xl pm:text-3xl uppercase mb-2 font-jom">
              khách hàng là ân nhân
            </h2>
            {letterText.map((char, index) => (
              <span
                key={index}
                className={`block font-alu md:text-[28px] pm:text-2xl mt-1 font-medium transition-opacity duration-75 delay-${
                  index * 50
                } ${showText ? 'opacity-100' : 'opacity-0'}`}
              >
                {char}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Letter;
