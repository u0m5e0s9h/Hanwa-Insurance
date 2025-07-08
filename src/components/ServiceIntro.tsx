import { useState } from "react";
import MembershipFormModal from "./MembershipFormModal";

const ServiceIntro = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-white px-4 pt-2 pb-6">
      <div className="max-w-[1000px] mx-auto space-y-8">
        <div className="bg-white border border-gray-200 shadow-md px-4 py-5 flex flex-row items-center justify-between gap-4 flex-wrap md:flex-nowrap">
          
          {/* Image */}
          <div className="flex-1 min-w-[150px] max-w-[70%]">
            <img
              src="/service.png"
              alt="행복 신청 이미지"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Button  */}
          <div className="flex-1 min-w-[150px] max-w-[30%]">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full text-sm font-semibold text-gray-900 border border-orange-500 rounded-full px-4 py-4 hover:bg-orange-50 transition text-center"
            >
              “나눔의 행복”<br />가입 신청하기
            </button>
          </div>
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
