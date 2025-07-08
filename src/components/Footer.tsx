import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full max-w-[1920px] bg-white border-t border-[#E6E6E6] ">
      <div className="max-w-5xl mx-auto w-full px-4 flex flex-col items-center text-center gap-4">

        {/*  Mobile Only Footer Section */}
        <div className="w-full md:hidden flex flex-col gap-4">

          {/* Top 4 Buttons */}
          <div className="w-full flex justify-between  text-xs mb-[12px]">
            {["한화다이렉트", "상담신청", "APP다운", "PC버전"].map((label) => (
              <Link
                key={label}
                to="/not-found"
                className="flex-1 text-center py-3 text-sm font-medium border border-gray-300 rounded hover:bg-gray-100"
              >
                {label}
              </Link>
            ))}
          </div>


          
          <div className="w-full flex justify-between gap-4 mb-[12px]">
            {["개인정보처리방침", "신용정보활용체제"].map((label) => (
              <Link
                key={label}
                to="/not-found"
                className="flex-1 text-center py-3 text-sm font-medium border border-gray-300 rounded hover:bg-gray-100"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Contact  and Company Details */}
          <div className="text-xs text-gray-600 space-y-1 text-center">
            <p className="text-base h-[29px]  text-center mx-auto mb-10">
              <span className="font-bold text-4xl  text-gray-800">고객상담센터 </span>
              <span className="text-orange-500 text-4xl font-semibold">02-3395-7180</span>
            </p>


            <p className="flex flex-wrap justify-center gap-5 text-sm sm:text-base text-gray-700 text-center">
              <span>한화손해보험 주식회사 대표이사 나채범</span> <span>|</span>  <span>사업자등록번호 116-81-46445</span>
            </p>

            <p className="flex flex-wrap justify-center gap-5 text-sm sm:text-base text-gray-700 text-center">
              <span>|</span>
              <span>서울시 관악구 남부순환로 1796, 10층(삼호빌딩)</span>
            </p>

          </div>

          
          <div className="text-xs text-gray-400 text-center mb-[16px]">
            HANHWA GENERAL INSURANCE CO., LTD. ALL RIGHTS RESERVED.
          </div>
        </div>

        {/*  Desktop version */}
        <div className="hidden md:flex flex-col items-center text-center gap-[5px] w-full">

          {/* Info Line */}
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-sm text-gray-600 h-[20px]">
            <span>대표전화 02-3395-7180</span>
            <span>|</span>
            <span>다이렉트 1588-8282</span>
            <span>|</span>
            <span>해외문의 82-2-316-7000</span>
            <span>|</span>
            <span>무료상담 080-236-7000</span>
            <span>|</span>
            <span>말로거는전화 1641(누르고)</span>
            <span>|</span>
            <span>한화손해보험</span>
          </div>

          
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "상품공시",
              "가격공시",
              "개인정보처리방침",
              "보호금융상품등록부",
              "서비스이용약관",
            ].map((label) => (
              <Link
                key={label}
                to="/not-found"
                className="h-[18px] px-3 flex items-center border border-gray-300 text-xs rounded bg-white hover:bg-gray-100 transition"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Company Info */}
          <div className="text-xs text-gray-500 leading-relaxed text-center space-y-1 max-w-[90%]">
            <p className="h-[18px] overflow-hidden">
              한화손해보험 주식회사 대표이사 나재철 | 사업자등록번호 116-81-46445 |
              서울시 영등포구 여의대로 56 (여의도동 23-5)
            </p>
            <p className="h-[18px] overflow-hidden">
              한화손해보험 관악사업소 : 사업소장 정태영 | 관악사업소 주소 : 서울시 관악구
              남부순환로 1796, 10층(삼호빌딩)
            </p>
          </div>

          {/* Logos */}
          <div className="flex flex-wrap justify-center items-center gap-[5px]">
            <img src="/logos/image27.png" alt="KNDA" className="h-6" />
            <img src="/logos/image28.png" alt="ISMS" className="h-6" />
            <img src="/logos/image29.png" alt="WA" className="h-6" />
            <img src="/logos/image30.png" alt="Hanwha" className="h-6" />
            <img src="/logos/image31.png" alt="img31" className="h-6" />
            <img src="/logos/image32.png" alt="img32" className="h-6" />
            <img src="/logos/last.png" alt="last" className="h-6" />
            <span className="text-xs text-gray-500">관악사업소</span>
          </div>

          
          <div className="text-xs text-gray-400">
            HANHWA GENERAL INSURANCE CO., LTD. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
