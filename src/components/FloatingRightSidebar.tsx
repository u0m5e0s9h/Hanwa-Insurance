
import { useState } from "react";
import { Phone, Mail, ChevronLeft, ChevronRight } from "lucide-react";

const FloatingRightSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleEmailClick = () => {
    window.location.href =
      "mailto:tobego@naver.com?subject=Insurance Consultation Request&body=Hello, I would like to inquire about insurance consultation services.";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:02-3395-7180";
  };

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile toggle button when sidebar is closed */}
      {!isOpen && (
        <div className="fixed right-2 top-1/2 -translate-y-1/2 z-50 sm:hidden">
          <button
            onClick={toggleSidebar}
            className="bg-orange-500 text-white rounded-full p-2 shadow-lg"
          >
            <ChevronLeft size={20} />
          </button>
        </div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-1/2 -translate-y-1/2 z-50 transition-transform duration-300
          ${isOpen ? "right-4" : "-right-80"} sm:right-4`}
      >
        <div className="relative bg-white rounded-3xl shadow-xl w-24 py-6 flex flex-col items-center justify-between h-[400px]">
          {/* Mobile hide arrow inside sidebar */}
          <button
            onClick={toggleSidebar}
            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-orange-500 text-white rounded-full p-1 sm:hidden"
          >
            <ChevronRight size={18} />
          </button>

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
            <span className="text-sm font-semibold text-orange-500">
              YES<span className="text-orange-300">•</span>ECO
            </span>
            <span className="text-xs text-gray-600">바로가기</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingRightSidebar;
