import knife_play from "../assets/images/btn-knife-play.svg";
import cloud2 from "../assets/images/cloud1.png";
import discordIcon from "../assets/images/discord_icon.png";
import faceIcon from "../assets/images/face_icon.png";
import twitterIcon from "../assets/images/twitter_icon.png";
export const Cloud = () => {
  const imageIconClass = "w-16 h-16 mx-4";
  return (
    <div className="relative flex justify-between itemc-center h-96  -mt-44 w-full z-10">
      <img className="absolute w-full" src={cloud2} alt="cloud" />
      <div className="flex items-center z-50 mt-20">
        <img className={imageIconClass} src={faceIcon} alt="Face Book" />
        <img className={imageIconClass} src={twitterIcon} alt="Twitter Book" />
        <img className={imageIconClass} src={discordIcon} alt="Discord Book" />
      </div>
      <img className="w-40 h-auto z-50 mt-20" src={knife_play} alt="" />
    </div>
  );
};
