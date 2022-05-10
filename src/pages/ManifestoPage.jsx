import attention from "../assets/images/attention.png";
import mani_02 from "../assets/images/mani-02.png";
import mani_03 from "../assets/images/mani-03.png";
import manifesto from "../assets/images/manifesto.png";
import meet_toul from "../assets/images/meet-toul.png";
import ourvision from "../assets/images/our vision.png";
import prologue from "../assets/images/prologue.png";
import prologue2 from "../assets/images/prologue_2.png";
import {
  attentionText,
  manifestoText1,
  manifestoText2,
  manifestoText3,
  meetToulText1,
  meetToulText2,
  ourvisionText,
} from "../constants";
// import { KANE_ITEMS } from "../constants";
export const ManifestoPage = () => {
  const maniTextClass = "text-white text-2xl my-8";
  return (
    <div
      id="manifesto"
      className="flex flex-col w-screen  max-w-screen-2xl z-10 pt-20"
    >
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
      <div id="classes" className=" pt-40 -mt-40">
        <img src={prologue} alt="prologue" />
      </div>
      <div className="flex flex-row-reverse -mt-64">
        <img className="w-2/3" src={prologue2} alt="" />
      </div>
      <img className="m-auto mb-16" src={attention} alt="attention" />
      <div>
        <p
          className={`${maniTextClass} text-center w-2/3 m-auto uppercase font-bold`}
        >
          We're gonna make an anime game.
        </p>
        <p className={`${maniTextClass} text-center w-2/3 m-auto`}>
          {attentionText}
        </p>
      </div>
      <img className="m-auto mb-16" src={ourvision} alt="attention" />
      <p className={`${maniTextClass} text-center w-2/3 m-auto`}>
        {ourvisionText}
      </p>
      <div className="flex">
        <img className="w-3/6" src={meet_toul} alt="" />
        <div>
          <p className={`${maniTextClass} w-4/5 m-auto`}>{meetToulText1}</p>
          <p className={`${maniTextClass}  w-4/5 m-auto`}>{meetToulText2}</p>
        </div>
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
};
