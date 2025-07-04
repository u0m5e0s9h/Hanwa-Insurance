
const DetailedBenefits = () => {
  const data = [
    {
      title: "관공서(계약자)의 입장에서 보는 효과",
      bullets: [
        "예산 외 기부 재원 확보: 공무원 1인의 보험 가입으로 사망 시 최대 2,800만 원이 기부금으로 유입되어 공공서의 복지사업 재원으로 활용 가능.",
        "법정기부단체 변환 가능성: 관공서가 보험계약 통해 시 기부금 수령 후 공공예산으로 편성 가능.",
        "ESG 경영 실현: 기부보험 도입 자체가 ESG(사회적 책임, 공공가치 실현) 항목에서 성과로 인정 가능.",
        "기관 이미지 상승 및 대외 신뢰도 제고: ‘선한 기부 유도 기관’으로 홍보 효과 및 공공 신뢰 상승."
      ]
    },
    {
      title: "공무원(피보험자)의 입장에서 보는 효과",
      bullets: [
        "공직 윤리 실현: 생전의 국민 세금으로 급여를 받은 공무원이 사망 시 국가와 사회에 감사의 뜻을 실현하는 구조.",
        "유언보다 강력한 선택권: 기여 법적 절차 없이 사망보험금이 자동 기부되어 절차상 오류 없이 기부가 완료됨.",
        "기부보험은 국민의 세금 → 공직자의 급여 → 공공기부 → 다시 국민에게로는 순환구조를 만들어내며, 공무원은 그 연결고리의 일환자가 되는 것입니다."
      ]
    },
    {
      title: "유가족의 입장에서 보는 효과",
      bullets: [
        "실질적인 위로금 수령: 3,500만 원 중 20%인 700만 원이 유가족에게 직접 지급되는 상조 위로금 제공.",
        "기부 잔재에 대한 고인의 이름으로 쓰임새 및 후손에 추앙 → 망에 회복 및 기억의 의미 부여.",
        "세제 혜택: 기부금 영수증으로 2,800만 원 상당 발급 → 세액공제 및 소득공제 혜택 가능.",
        "경제적 + 감성적 + 사회적 위로: 금전적 지원 외에도 망에, 세제, 추모적 가치까지 함께 전달."
      ]
    },
    {
      title: "사회 전체의 입장에서 보는 효과",
      bullets: [
        "지속가능한 기부문화 정착: 개인이 아닌 제도통해 자동 기부가 이루어져 기부의 시스템화 가능.",
        "지역사회 공공복지 확산: 공공기관 통한 기부금 유입 → 지역 사회복지, 공공시설, 주민지원사업 등으로 쓰임.",
        "공공-민간 협력 확대: 분산화 효과 + 분석자료 확보 + 설문지와 기부보험으로 확장 가능성.",
        "기부 인식 개선: 사망이라는 부정적 사건을 ‘공공기여’로 재해석 → 감동 전달 효과 큼."
      ]
    }
  ];

  return (
    <section className="px-6 py-10 bg-white border-t border-[#E6E6E6] flex flex-col items-center gap-10">
      {/* Header - now matches card & message width */}
      <div className="w-full max-w-4xl px-10">
        <h2 className="text-xl font-bold text-orange-500 mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-orange-500 rounded-full inline-block" />
          기부보험의 다층적 효과 정리
        </h2>
      </div>

      {/* Cards - same width as message box */}
      <div className="flex flex-col gap-10 w-full max-w-4xl px-10">
        {data.map((item, idx) => (
          <div key={idx} className="space-y-2">
            <div className="flex items-center text-orange-500 font-bold text-base">
              <span className="mr-2">{idx + 1}.</span>
              <h3>{item.title}</h3>
            </div>
            <ul className="list-inside space-y-1 text-sm text-gray-700">
              {item.bullets.map((point, index) => (
                <li key={index} className="flex items-start gap-1">
                  <span className="text-orange-500 mt-1">✔</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* 종합 메시지 (Comprehensive Message) */}
      <div className="relative mt-10 w-full max-w-4xl px-10 py-5 bg-[#FFF3DC] rounded">
        {/* Floating Label */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-[#F2763D] font-semibold text-sm px-4 py-1 rounded shadow-md z-10">
          종합 메시지
        </div>

        {/* Orange Message Box */}
        <div className="bg-[#F2763D] text-white p-6 text-sm rounded shadow-md text-center mt-4">
          <p className="mb-1">
            “기부보험은 한 사람의 마지막 숨결을 모두의 삶을 밝히는 빛으로 전환하는 신앙적 유산입니다.”
          </p>
          <p>
            “국가를 위한 헌신의 끝, 국민을 위한 감사의 시작”
          </p>
        </div>
      </div>
    </section>
  );
};

export default DetailedBenefits;
