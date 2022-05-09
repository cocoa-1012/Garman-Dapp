import mani_02 from "../assets/images/mani-02.png";
import mani_03 from "../assets/images/mani-03.png";
import manifesto from "../assets/images/manifesto.png";
import prologue from "../assets/images/prologue.png";
import prologue2 from "../assets/images/prologue_2.png";
import { manifestoText1, manifestoText2, manifestoText3 } from "../constants";
export const ManifestoPage = () => {
  const maniTextClass = "text-white text-2xl my-8";
  return (
    <div className="flex flex-col w-screen  max-w-screen-2xl z-10 mt-40">
      <img className="m-auto" src={manifesto} alt="manifesto title" />
      <div className="flex flex-row-reverse">
        <img className="flex-end" src={mani_02} alt="mani-02" />
      </div>
      <div className="flex items-center justify-between">
        <div className="w-2/3">
          <p className={maniTextClass}>{manifestoText1}</p>
          <p className={maniTextClass}>{manifestoText2}</p>
          <p className={maniTextClass}>{manifestoText3}</p>
        </div>
        <div className="w-1/3">
          <img className="h-screen" src={mani_03} alt="" />
        </div>
      </div>
      <div>
        <img src={prologue} alt="prologue" />
      </div>
      <div className="flex flex-row-reverse -mt-60">
        <img className="w-2/3" src={prologue2} alt="" />
      </div>
    </div>
  );
};
