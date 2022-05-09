import knife_play from "../assets/images/btn-knife-play.svg";
import discordIcon from "../assets/images/discord_icon.png";
import faceIcon from "../assets/images/face_icon.png";
import twitterIcon from "../assets/images/twitter_icon.png";
export const Cloud = () => {
  const imageIconClass = "w-16 h-16 mx-4";
  return (
    <div className="flex justify-between itemc-center bg-cloud2 bg-cover h-96  -mt-44 w-full">
      <div className="flex items-center">
        <img className={imageIconClass} src={faceIcon} alt="Face Book" />
        <img className={imageIconClass} src={twitterIcon} alt="Twitter Book" />
        <img className={imageIconClass} src={discordIcon} alt="Discord Book" />
      </div>
      <img className="w-40 h-auto" src={knife_play} alt="" />
    </div>
  );
};
