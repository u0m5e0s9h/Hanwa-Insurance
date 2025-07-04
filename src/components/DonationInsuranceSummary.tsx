
import { FaBriefcase, FaHeart, FaChartLine } from "react-icons/fa";

const DonationInsuranceSummary = () => {
  return (
    <section className="py-16 bg-gray-50">
      {/* Central content container */}
      <div className="w-full max-w-4xl mx-auto px-10 flex flex-col items-center gap-10">
        
        {/* 관공서 */}
        <div className="relative bg-gradient-to-br from-white to-blue-50 shadow-xl rounded-2xl px-6 py-6 w-full border border-gray-100">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full font-semibold shadow-md">
            관공서
          </div>
          <div className="flex justify-between items-start gap-4 mt-2">
            <ul className="text-sm text-gray-800 list-decimal pl-5 space-y-1">
              <li>보험계약 주체자</li>
              <li>사망보험금의 80% 기부금 수령</li>
              <li>지역사회 복지예산 확보</li>
              <li>ESG 경영 실현 및 이미지 상승</li>
            </ul>
            <div className="pt-2">
              <FaBriefcase className="text-blue-400 text-5xl opacity-70" />
            </div>
          </div>
        </div>

        {/* Line + Dot */}
        <div className="flex flex-col items-center">
          <div className="w-1 h-6 bg-purple-500" />
          <div className="w-3 h-3 bg-purple-500 rounded-full" />
        </div>

        {/* 공무원 */}
        <div className="relative bg-gradient-to-br from-white to-blue-50 shadow-xl rounded-2xl px-6 py-6 w-full border border-gray-100">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full font-semibold shadow-md">
            공무원
          </div>
          <div className="flex justify-between items-start gap-4 mt-2">
            <ul className="text-sm text-gray-800 list-decimal pl-5 space-y-1">
              <li>피보험자</li>
              <li>사망 시 국민·국가에 마지막 감사</li>
              <li>유가족에게 위로금 20% 제공</li>
              <li>명예 회복 + 감사패/추모패 전달</li>
            </ul>
            <div className="pt-2">
              <FaHeart className="text-pink-400 text-5xl opacity-70" />
            </div>
          </div>
        </div>

        {/* Line + Dot */}
        <div className="flex flex-col items-center">
          <div className="w-1 h-6 bg-purple-500" />
          <div className="w-3 h-3 bg-purple-500 rounded-full" />
        </div>
      </div>

      {/* Bottom Orange Section */}
      <div className="relative mt-16">
        {/* Orange background (limited width) */}
        <div className="h-56 bg-orange-500 w-full max-w-4xl mx-auto rounded-xl" />

        {/* Floating 보험설계사 Card */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl px-10 z-10">
          <div className="bg-gradient-to-br from-white to-blue-50 shadow-xl rounded-2xl px-6 py-6 border border-gray-100 relative">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full font-semibold shadow-md">
              보험설계사
            </div>
            <div className="flex justify-between items-start gap-4 mt-2">
              <ul className="text-sm text-gray-800 list-decimal pl-5 space-y-1">
                <li>보험상품 설명 및 가입</li>
                <li>수수료 일부(30%) 물품기부 참여</li>
                <li>고객 감동 및 브랜드 신뢰 상승</li>
                <li>사회공헌 활동 실적 확보</li>
              </ul>
              <div className="pt-2">
                <FaChartLine className="text-green-400 text-5xl opacity-70" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationInsuranceSummary;
