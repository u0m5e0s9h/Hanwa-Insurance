
import { useState } from "react";
import MembershipFormModal from "./MembershipFormModal";

const ServiceIntro = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-white px-8 pt-2 pb-6">
      <div className="max-w-[1000px] mx-auto space-y-12">
        
        <div className="bg-white border border-gray-200 shadow-md px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Image block */}
          <div className="flex-shrink-0">
            <img
              src="/service.png"
              alt="행복 신청 이미지"
              className="w-[636px] h-[114.5px]  object-contain"
            />
          </div>

          {/* Button only */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-[264px] h-[74px] text-sm font-semibold text-gray-900 border border-orange-500 rounded-full px-[32px] py-[24px] hover:bg-orange-50 transition text-center"
          >
            “나눔의 행복”<br />가입 신청하기
          </button>
        </div>
      </div>

      <MembershipFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default ServiceIntro;
