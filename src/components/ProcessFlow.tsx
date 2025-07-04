
// import React, { useState } from "react";
// import { ArrowDown } from "lucide-react";

// const ProcessFlow = () => {
//   const [activeType, setActiveType] = useState("Donation by Government officials");

//   const buttonLabels = [
//     "Donation by Government officials",
//     "Public Institution Citizen Donations",
//     "Religious Organization Donation Insurance",
//     "Religious Individuals Donation Insurance",
//   ];

//   const flowTexts = {
//     "Donation by Government officials": {
//       title: "insurance structure for government offices and civil servants",
//       steps: [
//         "Government Office (Policyholder)",
//         "Civil Servant (Insured) enrolls",
//         "Upon death, insurance payout begins",
//         ["Government donation (80%)", "Bereavement support for family (20%)"],
//         "Plaque of appreciation + donation receipt to family (80% insurance)"
//       ],
//     },
//     "Public Institution Citizen Donations": {
//       title: "Citizen-participated donation insurance via public institutions",
//       steps: [
//         "Public Institution (Policyholder)",
//         "Citizen (Insured) enrolls",
//         "Upon death, insurance claim is filed",
//         ["Government donation (80%)", "Bereavement support for family (20%)"],
//         "Plaque of appreciation + donation receipt to family (80% insurance)"
//       ],
//     },
//     "Religious Organization Donation Insurance": {
//       title: "Donation insurance structure based on religious organizations",
//       steps: [
//         "Religious Organization (Policyholder)",
//         "Believer (Insured) enrolls",
//         "Upon death, insurance benefits is paid out",
//         ["Religious Organization Donation (80%)", "Bereavement Support for Family(20%)"],
//         "Plque of appreciation + donation receipt (80% of death benefit) delivered to beraved family"
//       ],
//     },
//     "Religious Individuals Donation Insurance": {
//       title: "Donation insurance centered on individual religious members",
//       steps: [
//         "Religious Individual (Policyholder)",
//         "Religious Individual (Insured) Enrolls in Insurance",
//         "Upon the insured's death, insurance payout is triggered",
//         ["Donation to Religious organization (80%)", "Bereavement Support for Family(20%)"],
//         "Plaque of appreciation + donation receipt (80% of death benefit) delivered to bereaved family"
//       ],
//     },
//   };

//   const currentFlow = flowTexts[activeType];

//   return (
//     <section className="py-16 px-4 bg-gray-50">
//       <div className="max-w-5xl mx-auto">
//         {/* Selectable Buttons */}
//         <div className="grid md:grid-cols-4 gap-6 mb-12">
//           {buttonLabels.map((label) => {
//             const isActive = activeType === label;
//             return (
//               <button
//                 key={label}
//                 onClick={() => setActiveType(label)}
//                 className={`px-6 py-3 rounded-lg font-medium transition-colors
//                   ${isActive
//                     ? "bg-orange-500 text-white"
//                     : "bg-white text-black hover:bg-orange-100 border border-gray-300"
//                   }`}
//               >
//                 {label}
//               </button>
//             );
//           })}
//         </div>

//         {/* Process Flow */}
//         <div className="bg-white rounded-xl p-8 shadow-lg">
//           <h3 className="text-xl font-bold text-orange-500 mb-8 text-left pl-2">
//             {currentFlow.title}
//           </h3>

//           <div className="flex flex-col items-center space-y-6">
//             <div className="bg-orange-500 text-white px-8 py-3 rounded-lg font-medium text-center">
//               {currentFlow.steps[0]}
//             </div>

//             <ArrowDown className="w-6 h-6 text-gray-400" />

//             <div className="bg-blue-100 text-blue-800 px-8 py-3 rounded-lg font-medium text-center">
//               {currentFlow.steps[1]}
//             </div>

//             <ArrowDown className="w-6 h-6 text-gray-400" />

//             <div className="bg-blue-100 text-blue-800 px-8 py-3 rounded-lg font-medium text-center">
//               {currentFlow.steps[2]}
//             </div>

//             <div className="flex justify-between w-full max-w-sm mt-6">
//               <ArrowDown className="w-6 h-6 text-gray-400 ml-6" />
//               <ArrowDown className="w-6 h-6 text-gray-400 mr-6" />
//             </div>

//             <div className="flex space-x-8">
//               <div className="bg-orange-200 text-orange-800 px-6 py-3 rounded-lg font-medium text-center">
//                 {currentFlow.steps[3][0]}
//               </div>
//               <div className="bg-orange-200 text-orange-800 px-6 py-3 rounded-lg font-medium text-center">
//                 {currentFlow.steps[3][1]}
//               </div>
//             </div>

//             <ArrowDown className="w-6 h-6 text-gray-400" />

//             <div className="bg-orange-100 border-2 border-orange-300 px-8 py-4 rounded-lg text-center">
//               <p className="font-medium text-orange-800">
//                 {currentFlow.steps[4]}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Benefits Table */}
//         <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
//           <h3 className="text-xl font-bold text-orange-500 mb-6 pl-2">
//             Insurance Example & Benefit Breakdown
//           </h3>

//           <div className="mb-6">
//             <p><strong>Policyholder</strong>: District Office 00 (City Hall)</p>
//             <p><strong>Insured</strong>: 55-year-old civil servant</p>
//             <p><strong>Premium</strong>: ₩300,000/month, 20 years, payout ₩35,000,000</p>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full border-collapse">
//               <thead>
//                 <tr className="bg-orange-500 text-white">
//                   <th className="border border-orange-600 px-4 py-3 text-left">Category</th>
//                   <th className="border border-orange-600 px-4 py-3 text-left">Amount</th>
//                   <th className="border border-orange-600 px-4 py-3 text-left">Beneficiary</th>
//                   <th className="border border-orange-600 px-4 py-3 text-left">Description</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr className="bg-gray-50">
//                   <td className="border border-gray-300 px-4 py-3">Donation by Office</td>
//                   <td className="border border-gray-300 px-4 py-3">₩28,000,000</td>
//                   <td className="border border-gray-300 px-4 py-3">District Office</td>
//                   <td className="border border-gray-300 px-4 py-3">Used for public welfare & ESG strategy</td>
//                 </tr>
//                 <tr>
//                   <td className="border border-gray-300 px-4 py-3">Family Condolence</td>
//                   <td className="border border-gray-300 px-4 py-3">₩7,000,000</td>
//                   <td className="border border-gray-300 px-4 py-3">Family</td>
//                   <td className="border border-gray-300 px-4 py-3">Bereavement fund directly paid</td>
//                 </tr>
//                 <tr className="bg-gray-50">
//                   <td className="border border-gray-300 px-4 py-3">Memorial Ceremony</td>
//                   <td className="border border-gray-300 px-4 py-3">-</td>
//                   <td className="border border-gray-300 px-4 py-3">Family</td>
//                   <td className="border border-gray-300 px-4 py-3">Memorial held in name of deceased</td>
//                 </tr>
//                 <tr>
//                   <td className="border border-gray-300 px-4 py-3">Donation Receipt</td>
//                   <td className="border border-gray-300 px-4 py-3">₩28,000,000</td>
//                   <td className="border border-gray-300 px-4 py-3">Family (for tax)</td>
//                   <td className="border border-gray-300 px-4 py-3">Used for income or tax deduction</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default ProcessFlow;



import React, { useState } from "react";
import { ArrowDown } from "lucide-react";

const ProcessFlow = () => {
  const [activeType, setActiveType] = useState("공무원 기부보험");

  const buttonLabels = [
    "공무원 기부보험",
    "공공기관 시민 기부보험",
    "종교단체 기부보험",
    "종교인 개인 기부보험",
  ];

  const flowTexts = {
    "공무원 기부보험": {
      title: "공공기관 및 공무원 대상 기부보험 구조",
      steps: [
        "공공기관 (보험계약자)",
        "공무원 (피보험자) 가입",
        "사망 시 보험금 지급 개시",
        ["정부 기부금 (80%)", "유족 위로금 (20%)"],
        "감사패 + 기부금 영수증 전달 (보험금 80%)"
      ],
    },
    "공공기관 시민 기부보험": {
      title: "공공기관을 통한 시민참여형 기부보험 구조",
      steps: [
        "공공기관 (보험계약자)",
        "시민 (피보험자) 가입",
        "사망 시 보험금 청구",
        ["정부 기부금 (80%)", "유족 위로금 (20%)"],
        "감사패 + 기부금 영수증 전달 (보험금 80%)"
      ],
    },
    "종교단체 기부보험": {
      title: "종교단체 기반 기부보험 구조",
      steps: [
        "종교단체 (보험계약자)",
        "신도 (피보험자) 가입",
        "사망 시 보험금 지급",
        ["종교단체 기부금 (80%)", "유족 위로금 (20%)"],
        "감사패 + 기부금 영수증 (사망보험금의 80%) 유족에게 전달"
      ],
    },
    "종교인 개인 기부보험": {
      title: "종교인 개인 중심의 기부보험 구조",
      steps: [
        "종교인 개인 (보험계약자)",
        "종교인 개인 (피보험자) 보험 가입",
        "사망 시 보험금 지급 개시",
        ["종교단체 기부금 (80%)", "유족 위로금 (20%)"],
        "감사패 + 기부금 영수증 (사망보험금의 80%) 유족에게 전달"
      ],
    },
  };

  const currentFlow = flowTexts[activeType];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">

        {/* 선택 가능한 버튼들 */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {buttonLabels.map((label) => {
            const isActive = activeType === label;
            return (
              <button
                key={label}
                onClick={() => setActiveType(label)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors
                  ${isActive
                    ? "bg-orange-500 text-white"
                    : "bg-white text-black hover:bg-orange-100 border border-gray-300"
                  }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* 프로세스 흐름도 */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-xl font-bold text-orange-500 mb-8 text-left pl-2">
            {currentFlow.title}
          </h3>

          <div className="flex flex-col items-center space-y-6">
            <div className="bg-orange-500 text-white px-8 py-3 rounded-lg font-medium text-center">
              {currentFlow.steps[0]}
            </div>

            <ArrowDown className="w-6 h-6 text-gray-400" />

            <div className="bg-blue-100 text-blue-800 px-8 py-3 rounded-lg font-medium text-center">
              {currentFlow.steps[1]}
            </div>

            <ArrowDown className="w-6 h-6 text-gray-400" />

            <div className="bg-blue-100 text-blue-800 px-8 py-3 rounded-lg font-medium text-center">
              {currentFlow.steps[2]}
            </div>

            <div className="flex justify-between w-full max-w-sm mt-6">
              <ArrowDown className="w-6 h-6 text-gray-400 ml-6" />
              <ArrowDown className="w-6 h-6 text-gray-400 mr-6" />
            </div>

            <div className="flex space-x-8">
              <div className="bg-orange-200 text-orange-800 px-6 py-3 rounded-lg font-medium text-center">
                {currentFlow.steps[3][0]}
              </div>
              <div className="bg-orange-200 text-orange-800 px-6 py-3 rounded-lg font-medium text-center">
                {currentFlow.steps[3][1]}
              </div>
            </div>

            <ArrowDown className="w-6 h-6 text-gray-400" />

            <div className="bg-orange-100 border-2 border-orange-300 px-8 py-4 rounded-lg text-center">
              <p className="font-medium text-orange-800">
                {currentFlow.steps[4]}
              </p>
            </div>
          </div>
        </div>

        {/* 보험 예시 및 수익 분배 */}
        <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-xl font-bold text-orange-500 mb-6 pl-2">
            보험 예시 및 수익 분배 내역
          </h3>

          <div className="mb-6">
            <p><strong>보험계약자</strong>: 00 구청 (시청)</p>
            <p><strong>피보험자</strong>: 55세 공무원</p>
            <p><strong>보험료</strong>: 월 30만원, 20년 납입, 보험금 3,500만원</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-orange-500 text-white">
                  <th className="border border-orange-600 px-4 py-3 text-left">항목</th>
                  <th className="border border-orange-600 px-4 py-3 text-left">금액</th>
                  <th className="border border-orange-600 px-4 py-3 text-left">수익자</th>
                  <th className="border border-orange-600 px-4 py-3 text-left">설명</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">기관 기부금</td>
                  <td className="border border-gray-300 px-4 py-3">₩28,000,000</td>
                  <td className="border border-gray-300 px-4 py-3">구청</td>
                  <td className="border border-gray-300 px-4 py-3">공공복지 및 ESG 전략 활용</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">유족 위로금</td>
                  <td className="border border-gray-300 px-4 py-3">₩7,000,000</td>
                  <td className="border border-gray-300 px-4 py-3">유족</td>
                  <td className="border border-gray-300 px-4 py-3">직접 지급되는 위로금</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">추모 행사</td>
                  <td className="border border-gray-300 px-4 py-3">-</td>
                  <td className="border border-gray-300 px-4 py-3">유족</td>
                  <td className="border border-gray-300 px-4 py-3">고인을 기리는 추모행사 진행</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">기부금 영수증</td>
                  <td className="border border-gray-300 px-4 py-3">₩28,000,000</td>
                  <td className="border border-gray-300 px-4 py-3">유족 (세제 혜택용)</td>
                  <td className="border border-gray-300 px-4 py-3">소득공제 및 세금감면 활용 가능</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProcessFlow;
