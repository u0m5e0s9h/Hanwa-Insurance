
const HeroSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto"> {/* max-w-7xl에서 max-w-3xl로 축소 */}

        {/* 이미지와 함께 정렬된 제목 */}
        <div className="bg-white text-orange-500 text-lg font-semibold mb-4 px-2">
          나눔의 행복 소개 (특약)
        </div>

        {/* 흰 박스 안의 이미지 */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg relative">
          <img
            src="/hero-image.png"
            alt="나눔의 행복"
            className="w-full h-auto object-cover"
          />

          {/* 장식용 원형 요소 */}
          <div className="absolute top-4 left-8 w-16 h-16 bg-orange-200 rounded-full opacity-20 z-10"></div>
          <div className="absolute top-8 right-12 w-12 h-12 bg-orange-300 rounded-full opacity-30 z-10"></div>
          <div className="absolute bottom-4 left-16 w-8 h-8 bg-orange-400 rounded-full opacity-25 z-10"></div>
          <div className="absolute bottom-8 right-8 w-20 h-20 bg-orange-200 rounded-full opacity-20 z-10"></div>
        </div>

        {/* 정렬된 문단 */}
        <div className="mt-8 px-2">
          <div className="text-black leading-relaxed">
            “나눔의 행복”은 사망 보험금의 수익자를 특정 기부단체로 지정하여 지급하는 새로운 형태의 기부 특약 보험입니다.
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
