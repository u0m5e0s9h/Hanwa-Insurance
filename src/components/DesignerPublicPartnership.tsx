
import { ArrowDown } from "lucide-react";
import { FaHandHoldingHeart, FaUniversity, FaHandsHelping } from "react-icons/fa";

const DesignerPublicPartnership = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto w-full">
        <div className="bg-white rounded-xl p-8 shadow-lg space-y-16">

          {/* Top Flow Section */}
          <div className="space-y-6 text-center">
            <h3 className="text-left text-sm font-semibold text-orange-500">🔶 보험설계사 기부 물품 참여 형태</h3>

            <div className="flex flex-col items-center space-y-4">
              <div className="bg-orange-500 text-white px-6 py-3 rounded font-semibold">
                공무원 기부보험 가입
              </div>

              <ArrowDown className="w-6 h-6 text-orange-400" />

              <div className="bg-purple-100 text-purple-800 px-6 py-3 rounded font-medium text-sm">
                설계사 수수료 일부(30%) 관공서에 기부물품 기부
              </div>

              <ArrowDown className="w-6 h-6 text-orange-400" />

              <div className="bg-purple-100 text-purple-800 px-6 py-3 rounded font-medium text-sm">
                관공서 → 지역사회 물품 활용(복지/공공시설 등)
              </div>

              <ArrowDown className="w-6 h-6 text-orange-400" />

              <div className="bg-orange-50 border border-orange-300 px-6 py-4 rounded">
                <p className="text-sm font-medium text-orange-800">
                  공공기관 ESG 성과로 반영 + 신뢰 이미지 상승
                </p>
              </div>
            </div>
          </div>

          {/* Public Partnership Section */}
          <div className="space-y-6">
            <h3 className="text-left text-sm font-semibold text-orange-500">
              🔶 설계사의 역할을 넘은 공공 파트너십
            </h3>

            {/* Flow Icons */}
            <div className="flex justify-between items-center relative pb-6">
              <div className="absolute top-3 left-0 w-full h-0.5 bg-orange-300 z-0" />
              {[...Array(5)].map((_, i) => (
                i !== 0 && i !== 4 ? (
                  <div key={i} className="w-3 h-3 bg-white border-2 border-orange-500 rounded-full z-10" />
                ) : <div key={i} className="w-3 h-3 z-10" />
              ))}
            </div>

            {/* Orange Base Box with White Cards */}
            <div className="relative rounded-xl overflow-hidden">
              {/* Orange background covering 75% height */}
              <div className="bg-orange-500 h-[75%] absolute inset-x-0 bottom-0 rounded-b-xl" />

              {/* Cards */}
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-sm px-2 md:px-4 pb-2">
                <div className="bg-white rounded-xl shadow-2xl p-6 flex flex-col items-center space-y-3">
                  <FaHandHoldingHeart className="text-orange-500 w-8 h-8" />
                  <p>설계사는 모집수수료의 일부(30%)를 물품 & 서비스 기부</p>
                </div>
                <div className="bg-white rounded-xl shadow-2xl p-6 flex flex-col items-center space-y-3">
                  <FaUniversity className="text-orange-500 w-8 h-8" />
                  <p>기부물품은 관공서에 전달되어 지역 복지 목적으로 사용</p>
                </div>
                <div className="bg-white rounded-xl shadow-2xl p-6 flex flex-col items-center space-y-3">
                  <FaHandsHelping className="text-orange-500 w-8 h-8" />
                  <p>단순중개자가 아닌 공공 기여 파트너로 ESG 실현</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DesignerPublicPartnership;


