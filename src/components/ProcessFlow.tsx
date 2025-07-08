
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

        
        <div className="grid md:grid-cols-4 px-8 ">
          {buttonLabels.map((label) => (
            <button
              key={label}
              onClick={() => setActiveType(label)}
              className={`px-6 py-3 font-medium transition-colors
                ${activeType === label
                  ? "bg-orange-500 text-white"
                  : "bg-white text-black hover:bg-orange-100 border border-gray-300"}`}
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
              className="bg-white p-6 pb-[64px] shadow-md flex justify-center"
            >
              <img src={src} alt={`추가 이미지 ${index + 1}`} className="max-w-full h-auto" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProcessFlow;
