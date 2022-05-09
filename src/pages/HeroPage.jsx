import { useState } from "react";
import hero_banner1 from "../assets/images/banner_1.jpg";
import hero_banner2 from "../assets/images/banner_2.jpg";
import day_icon from "../assets/images/day-icon.png";
import night_icon from "../assets/images/night-icon.png";
export const HeroPage = () => {
  const [isDay, setIsDay] = useState(true);
  return (
    <>
      <div className="max-h-screen w-screen h-auto overflow-hidden">
        <img
          className="w-screen"
          src={isDay ? hero_banner1 : hero_banner2}
          alt=""
        />
        <p>Hero Page</p>
      </div>
      <div className="absolute right-0 top-40 p-2 space-x-4 rounded-l-full flex bg-gray-900/30 ">
        <img
          className={`${isDay ? "opacity-30" : ""} cursor-pointer`}
          src={night_icon}
          alt="Night"
          onClick={() => setIsDay(false)}
        />
        <img
          className={`${!isDay ? "opacity-30" : ""} cursor-pointer`}
          src={day_icon}
          alt="Day"
          onClick={() => setIsDay(true)}
        />
      </div>
    </>
  );
};
