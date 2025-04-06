import React from 'react';

const CardFoodRight = () => {
  return (
    <div className="w-full bg-[#FFFEEA] grid grid-cols-5 rounded-lg shadow-lg overflow-hidden border gap-2 ">
      {/* Nội dung thẻ */}
      <div className="p-4 col-span-2">
        {/* Tiêu đề */}
        <h3 className="text-xs font-semibold italic text-gray-800">
          Bạch tuộc chiên
        </h3>
        {/* Mô tả */}
        <p className="text-gray-600 mt-2 italic text-sm">
          "Bạch tuộc giòn rụm, đậm đà, thơm ngon khó cưỡng."
        </p>
      </div>
      {/* Hình ảnh món ăn */}
      <div className="relative col-span-3 p-2">
        <img
          src={
            'https://khaihoanphuquoc.com.vn/wp-content/uploads/2023/11/bach-tuoc-chien-nuoc-mam-1.jpg'
          } // Thay bằng URL hoặc đường dẫn hình ảnh thực tế
          alt="Bạch tuộc chiên"
          className="w-full h-48 object-cover"
          style={{ boxShadow: '-5px 5px 5px 0px rgba(0,0,0,0.25)' }}
        />
        {/* Nhãn "Món mới" */}
        <div
          className="absolute clip-[polygon(0_37%,_37%_0,_63%_0,_0_63%)] bg-red-500 w-40 h-40 top-0 left-0"
          style={{ clipPath: 'polygon(0 37%, 37% 0, 63% 0, 0 63%)' }}
        >
          <span className=" text-white -rotate-[45deg] text-base absolute top-7 left-2">
            Món mới
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardFoodRight;
