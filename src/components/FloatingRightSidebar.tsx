
import { Phone, Mail } from "lucide-react";

const FloatingRightSidebar = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:tobego@naver.com?subject=Insurance Consultation Request&body=Hello, I would like to inquire about insurance consultation services.";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:02-3395-7180";
  };

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50">
      <div className="bg-white rounded-3xl shadow-xl w-24 py-6 flex flex-col items-center justify-between h-[400px]">
        
        {/* KakaoTalk */}
        <div className="flex flex-col items-center space-y-2 cursor-pointer">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-yellow-300">TALK</span>
          </div>
          <span className="text-sm text-gray-800 text-center leading-tight">카톡 상담</span>
        </div>

        {/* Phone */}
        <div
          className="flex flex-col items-center space-y-2 cursor-pointer"
          onClick={handlePhoneClick}
        >
          <Phone className="text-gray-700 w-6 h-6" />
          <span className="text-sm text-gray-800 text-center leading-tight">전화 상담</span>
        </div>

        {/* Mail */}
        <div
          className="flex flex-col items-center space-y-2 cursor-pointer"
          onClick={handleEmailClick}
        >
          <Mail className="text-gray-700 w-6 h-6" />
          <span className="text-sm text-gray-800 text-center leading-tight">메일 상담</span>
        </div>

        {/* Divider */}
        <div className="w-3/4 border-t border-gray-200 my-1"></div>

        {/* YES•ECO Logo */}
        <div className="flex flex-col items-center text-center cursor-pointer">
          <span className="text-sm font-semibold text-orange-500">YES<span className="text-orange-300">•</span>ECO</span>
          <span className="text-xs text-gray-600">바로가기</span>
        </div>
      </div>
    </div>
  );
};

export default FloatingRightSidebar;
