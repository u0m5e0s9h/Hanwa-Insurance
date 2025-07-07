
const HeroSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-[1000px] mx-auto">
      
        <div className="mt-[64px] bg-white text-orange-500 text-lg font-semibold mb-4 px-2">
          나눔의 행복 소개 (특약)
        </div>
        <div className="mt-[16px] bg-white overflow-hidden shadow-lg relative">
          <img
            src="/hero-image1.png"
            alt="나눔의 행복"
            style={{ width: "1000px", height: "218px" }}
            className="object-cover mx-auto"
          />
           <img
             src="/hero-image2.png"
              alt="나눔의 행복"
           
           />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
