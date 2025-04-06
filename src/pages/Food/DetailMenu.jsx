import React from 'react';
import CardFoodLeft from './CardFoodLeft';
import CardFoodRight from './CardFoodRight';

const DetailMenu = () => {
  return (
    <div className=" py-20 px-2">
      <h2 className=" text-center text-2xl italic font-semibold py-4">
        Món chiên
      </h2>
      <div className="flex pm:flex-col md:flex-row justify-center items-center gap-4">
        <CardFoodLeft />
        <CardFoodRight />
      </div>
    </div>
  );
};

export default DetailMenu;
