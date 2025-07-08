
const HeroSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-[1000px] mx-auto w-full">

        <div className=" text-orange-500 text-lg font-semibold  mb-4 px-2">
          나눔의 행복 소개 (특약)
        </div>

        <div className="mt-4 bg-white overflow-hidden  relative w-full space-y-4">
         
          <img
            src="/hero-image1.png"
            alt="나눔의 행복"
            className="w-full h-auto object-cover "
          />

         
          <img
            src="/hero-image2.png"
            alt="나눔의 행복"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
