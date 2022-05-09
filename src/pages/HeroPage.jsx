import hero_banner from "../assets/images/banner_1.jpg";
export const HeroPage = () => {
  return (
    <>
      <div className="max-h-screen w-screen h-auto overflow-hidden">
        <img className="w-screen" src={hero_banner} alt="" />
        <p>Hero Page</p>
      </div>
      {/* <div className="bg-cloud bg-cover w-screen h-80">Hello</div> */}
    </>
  );
};
