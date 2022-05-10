import { useState } from "react";
import hero_banner1 from "../assets/images/banner_1.jpg";
import hero_banner2 from "../assets/images/banner_2.jpg";
import banner_skin from "../assets/images/banner_skin.png";
import knife_play from "../assets/images/btn-knife-play.svg";
import cloudImg from "../assets/images/clouds.png";
import day_icon from "../assets/images/day-icon.png";
import discordIcon from "../assets/images/discord_icon.png";
import night_icon from "../assets/images/night-icon.png";
import twitterIcon from "../assets/images/twitter_icon.png";

export const HeroPage = () => {
  const [isDay, setIsDay] = useState(true);
  const imageIconClass = "w-16 h-16 mx-4";
  return (
    <div className="relative">
      <div className=" max-h-screen w-screen h-auto overflow-hidden">
        <img
          className="relative max-h-screen w-screen h-auto mt-24 sm:mt-0 overflow-hidden"
          src={isDay ? hero_banner1 : hero_banner2}
          alt=""
        />
        {/* <p>Hero Page</p> */}
        <img
          className="absolute top-0 w-screen max-h-screen h-auto mt-24 sm:mt-0 overflow-hidden"
          src={banner_skin}
          alt="Banner Skin"
        />
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
      <div className="absolute justify-between items-center w-full z-10">
        <img
          className="h-auto w-full -mt-32 sm:-mt-48 md:-mt-60 lg:-mt-80 xl:-mt-96"
          src={cloudImg}
          alt="cloud"
        />
        <div className="flex items-center z-50 mt-20">
          <img
            className={imageIconClass}
            src={twitterIcon}
            alt="Twitter Book"
          />
          <img
            className={imageIconClass}
            src={discordIcon}
            alt="Discord Book"
          />
        </div>
        <img className="w-40 h-auto z-50 mt-20" src={knife_play} alt="" />
      </div>
    </div>
  );
};
