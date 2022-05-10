import knife_play from "../assets/images/btn-knife-play.svg";
import cloudImg from "../assets/images/clouds.png";
import discordIcon from "../assets/images/discord_icon.png";
import twitterIcon from "../assets/images/twitter_icon.png";
export const Cloud = () => {
  const imageIconClass = "w-16 h-16 mx-4";
  return (
    <div className="relative flex justify-between itemc-center h-96  -mt-44 w-full z-10">
      <img
        className="absolute top-[-150px] w-full"
        src={cloudImg}
        alt="cloud"
      />
      <div className="flex items-center z-50 mt-20">
        <img className={imageIconClass} src={twitterIcon} alt="Twitter Book" />
        <img className={imageIconClass} src={discordIcon} alt="Discord Book" />
      </div>
      <img className="w-40 h-auto z-50 mt-20" src={knife_play} alt="" />
    </div>
  );
};
