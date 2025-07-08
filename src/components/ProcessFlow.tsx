import React, { useState } from "react";

const ProcessFlow = () => {
  const [activeType, setActiveType] = useState("공무원 기부보험");

  const buttonLabels = [
    "공무원 기부보험",
    "공공기관 시민 기부보험",
    "종교단체 기부보험",
    "종교인 개인 기부보험",
  ];

  const imageSources = {
    "공무원 기부보험": "/bt1.png",
    "공공기관 시민 기부보험": "/bt1.png",
    "종교단체 기부보험": "/bt2.png",
    "종교인 개인 기부보험": "/bt2.png",
  };

  const additionalImages = [
    "/Designerpublic.png",
    "/DonationInsurance.png",
    "/DetailedBenefits.png",
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        
        <div className="flex justify-between  mb-8 overflow-x-auto">
          {buttonLabels.map((label) => (
            <button
              key={label}
              onClick={() => setActiveType(label)}
              className={`w-1/4 px-2 py-2 h-[62px] text-xs sm:text-sm font-medium  transition-colors text-center
                ${activeType === label
                  ? "bg-orange-500 text-white"
                  : "bg-white text-black border border-gray-300 hover:bg-orange-100"}`}
            >
              {label}
            </button>
          ))}
        </div>

      
        <div className="bg-white p-6 shadow-md flex justify-center mb-6">
          <img
            src={imageSources[activeType]}
            alt={activeType}
            className="max-w-full h-auto"
          />
        </div>

        
        <div className="space-y-6">
          {additionalImages.map((src, index) => (
            <div
              key={index}
              className="bg-white p-6 pb-16 shadow-md flex justify-center"
            >
              <img
                src={src}
                alt={`추가 이미지 ${index + 1}`}
                className="max-w-full h-auto"
              />
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ProcessFlow;
