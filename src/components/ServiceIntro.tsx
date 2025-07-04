

import { Shield, Users, TrendingUp, Award, ArrowUp } from "lucide-react";
import MembershipFormModal from "./MembershipFormModal";
import { useState } from "react";

const ServiceIntro = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sections = [
    {
      icon: Shield,
      title: "상품 구조 요약",
      items: [
        "<strong>지급 대상</strong> : 피보험자 사망 시, 보험금 전액이 지정 기업단체로 지급",
        "<strong>유가족 혜택</strong> : 1. 보험금의 20%를 위로금으로 지급",
        "             2. 나머지 80%는 유가족 세대 생계 지원",
        "             3. 고인의 이름으로 기부재단 설치 또는 추모관 조성 가능",
      ],
    },
    {
      icon: Users,
      title: "이 상품이 특별한 이유",
      items: [
        "유가족에게 실질적인 경제적 지원 및 위로 제공",
        "기업의 사회적 책임과 공공 이미지 제고에 기여",
        "기업과 종교단체의 다양한 목적에 따라 유연하게 운영 가능",
      ],
    },
    {
      icon: TrendingUp,
      title: "ESG 경영 및 브랜드 인지도 향상",
      items: [
        "<strong>사회에 기여</strong> : ESG 기준에 부합하는 신뢰 이미지 형성",
        "기업의 긍정적 인식 확대 및 브랜드 가치 상승",
      ],
    },
    {
      icon: Award,
      title: "상거래(FP) 기업 기여 확대",
      items: [
        "FP는 보험 수수료의 일부(30%)를 지정된 기부단체에 기부함으로써 사회적 공헌 가능",
      ],
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* ✅ 주요 정보 카드 */}
        <div className="bg-gray-50 rounded-xl p-8 shadow-md">
          {sections.map((section, index) => (
            <div key={index} className="mb-8">
              <div className="flex items-center mb-3 space-x-2">
                <ArrowUp className="text-orange-500 w-4 h-4" />
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <section.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-orange-500 text-lg">
                  {section.title}
                </h3>
              </div>
              <ul className="space-y-2 pl-2">
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-[15px] text-gray-700 leading-relaxed"
                  >
                    <span className="text-orange-500">▸</span>{" "}
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ✅ 요약 박스 */}
        <div className="text-center bg-white rounded-xl p-8 shadow-md space-y-4">
          <p className="text-[15px] text-gray-700">
            이 구조를 통해 기업, 유가족, 브랜드, 사회 공헌 측면에서 다양한 이점을 얻을 수 있습니다.
          </p>
          <p className="text-[16px] text-gray-800 font-semibold">
            <strong>"나눔의 행복"</strong>은 고인의 마지막 뜻을 사회에 환원하며, 그 마음이 또 다른 생명을 살립니다.
          </p>
          <p className="text-[15px] text-gray-600">
            그 선택은 유가족에게는 위로가 되고, 세상에는 변화를 일으키는 상품이 됩니다.
          </p>

          <div className="pt-4">
            <div className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full">
              <span className="text-[16px] font-semibold">
                "당신의 마지막 선택이, 누군가의 시작이 됩니다."
              </span>
            </div>
          </div>

          <p className="mt-4 text-gray-600 text-[14px]">
            “나눔의 행복”과 함께하는 따뜻한 세상 만들기에 동참해 주세요.
          </p>
        </div>

        {/* ✅ 연락처 카드 */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-md px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* 왼쪽 섹션: 아이콘 + 정보 */}
          <div className="flex items-center gap-4">
            <img
              src="/contact-icon.png"
              alt="연락 아이콘"
              className="w-16 h-16 object-contain"
            />
            <div>
              <h4 className="text-lg font-bold text-gray-900">
                한화손해보험<br />관악지점
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                담당자: 정태영 지점장
              </p>
              <p className="text-sm bg-orange-50 text-orange-600 px-3 py-1 rounded-md inline-block mt-2">
                연락처 02-3395-7180 / 이메일 tobego@naver.com
              </p>
            </div>
          </div>

          {/* 오른쪽 섹션: CTA 버튼 */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-sm font-semibold text-gray-900 border border-orange-500 rounded-full px-6 py-3 hover:bg-orange-50 transition text-center"
          >
            “나눔의 행복”<br />가입 신청하기
          </button>
        </div>
      </div>
      <MembershipFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default ServiceIntro;
