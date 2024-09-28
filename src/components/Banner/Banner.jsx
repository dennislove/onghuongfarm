import React from 'react';
import coffeeCup from '../../images/coffee_cup.png';
import coffee from '../../images/coffee.png';
const Banner = () => {
  return (
    <section>
      <div className=" grid md:grid-cols-12 gap-7  pm:mt-0 pm:py-10 ">
        <div className="col-span-7 flex flex-col justify-center gap-3  mx-10">
          <div className=" relative">
            <div className=" z-10">
              <h1 className=" font-black text-2xl font-gry text-center leading-[60px] text-dark-hard">
                Ông Hướng Farm
              </h1>
              {/* <img src={cafe} alt="" className=" w-80 justify-center mx-auto" /> */}
              <h1 className=" font-normal  text-[118px] uppercase font-jom text-center leading-[66px] text-dark-hard">
                cà phê trong lành
              </h1>
              <p className=" uppercase text-dark-hard text-base">
                Uống cafe không nhất thiết phải nhiều người mới ngon nhé. Khi
                bạn ngồi một mình thưởng thức ly cafe đen đắng. Ôi cái cảm giác
                ấy bình yên tới lạ lùng…
              </p>
            </div>
          </div>
        </div>

        <div className="  col-span-5 pb-4">
          <div className=" relative">
            <img
              src={coffeeCup}
              alt=""
              className="relative animate-moveRight md:ml-0 pm:ml-[20%]"
              style={{
                position: 'relative'
              }}
            />

            <div className="  animate-moveTop">
              <img
                src={coffee}
                alt=""
                className=" absolute lg:top-1/3 md:top-[50%] md:block pm:hidden float-end right-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
