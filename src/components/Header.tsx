import { Home, Search, Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [zoom, setZoom] = useState(100);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const mobileDropdownRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const navItems = [
    {
      label: "나눔의 행복",
      items: ["나눔의행복 소개", "참여 회사", "전달 회사"],
    },
    {
      label: "보험소개",
      items: ["간편 검색", "추천 검색"],
    },
    {
      label: "관악사업소",
      items: [
        "관악사업소 소개",
        "오시는 길",
        "지점장 인사말",
        "소속 FP",
        "채용 안내",
      ],
    },
    {
      label: "커뮤니티",
      items: ["공지사항", "질문과 답변", "자주 묻는 질문", "이벤트"],
    },
  ];

  const mobileDropdownItems = [
    "나눔의행복(특약) 소개",
    "참여기업",
    "납품기업",
  ];

  useEffect(() => {
    document.documentElement.style.fontSize = `${zoom}%`;
  }, [zoom]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !Object.values(dropdownRefs.current).some((ref) =>
          ref?.contains(event.target as Node)
        )
      ) {
        setOpenDropdown(null);
      }

      if (
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target as Node)
      ) {
        setMobileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/not-found");
  };

  const handleNavigateToNotFound = () => {
    setMobileDropdownOpen(false);
    setTimeout(() => {
      navigate("/not-found");
    }, 100);
  };

  const increaseZoom = () => {
    if (zoom < 200) setZoom((prev) => prev + 10);
  };

  const decreaseZoom = () => {
    if (zoom > 50) setZoom((prev) => prev - 10);
  };

  return (
    <header className="w-full text-base">
      
      <div className="lg:hidden block bg-white shadow-sm">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 relative">
         
          <Menu
            className="w-6 h-6 text-gray-700 cursor-pointer"
            onClick={() => alert("Open mobile sidebar")}
          />

          
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
            <img src="/logo.png" alt="logo" className="w-8 h-8 object-contain" />
            <div>
              <p className="text-sm font-bold text-gray-800">한화손해보험</p>
              <p className="text-xs text-gray-500">관악지사</p>
            </div>
          </div>

          
          <Search
            className="w-5 h-5 text-gray-600 ml-auto cursor-pointer"
            onClick={handleNavigateToNotFound}
          />
        </div>

        {/* Second Bar  */}
        <div className="relative border-t border-gray-100 px-4 py-2 bg-gray-50 text-center">
          <button
            onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            className="text-sm font-medium text-gray-700 flex items-center justify-center mx-auto"
          >
            <span>나눔의행복</span>
            <ChevronDown className="w-4 h-4 ml-1" />
          </button>

          {mobileDropdownOpen && (
            <div
              ref={mobileDropdownRef}
              className="absolute left-0 right-0 bg-white shadow-md mt-2 px-4 py-2 z-50"
            >
              {mobileDropdownItems.map((item) => (
                <button
                  key={item}
                  onClick={handleNavigateToNotFound}
                  className="w-full text-center text-sm text-gray-700 hover:text-orange-500 px-2 py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/*  Desktop Header */}
      <div className="hidden lg:block bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
          
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="로고" className="w-10 h-10 object-cover" />
            <div>
              <h1 className="text-xl font-bold text-gray-800">한화손해보험</h1>
              <p className="text-sm text-gray-600">관악지사</p>
            </div>
          </div>

          
          <nav className="flex items-center space-x-8">
            {navItems.map((nav) => (
              <div
                key={nav.label}
                className="relative"
                ref={(el) => (dropdownRefs.current[nav.label] = el)}
                onMouseEnter={() => setOpenDropdown(nav.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="text-gray-700 hover:text-orange-500 font-medium transition-colors flex items-center space-x-1 min-w-[70px] h-[48px] px-6">
                  <span>{nav.label}</span>
                  <ChevronDown size={16} />
                </button>
                {openDropdown === nav.label && (
                  <div className="absolute top-full left-0 bg-white border shadow-lg p-3 space-y-2 z-50 w-64">
                    {nav.items.map((item) => (
                      <Button
                        key={item}
                        variant="ghost"
                        className="w-full justify-start text-sm text-gray-700 hover:text-orange-500"
                        onClick={handleNavigateToNotFound}
                      >
                        {item}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          
          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearch} className="flex items-center">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="찾다"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-[106px] h-[37px] px-6 py-2 pr-10 text-sm"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-500"
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </form>
            <Button
              className="bg-orange-500 text-white px-6 py-2 text-sm hover:bg-orange-600"
              onClick={handleNavigateToNotFound}
            >
              로그인
            </Button>
          </div>
        </div>

        
        <div className="bg-gray-800 text-white py-2 px-4">
          <div className="max-w-[1327px] mx-auto flex justify-between items-center text-sm flex-wrap">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Home size={16} />
                <span>홈</span>
              </div>
              <span>나눔의 행복 소개 (시각 대비용)</span>
            </div>
            <div className="flex items-center space-x-2 border border-white rounded px-2 py-1 mt-2 sm:mt-0">
              <span>{zoom}%</span>
              <button
                onClick={increaseZoom}
                className="hover:text-orange-400 font-bold text-lg"
              >
                +
              </button>
              <button
                onClick={decreaseZoom}
                className="hover:text-orange-400 font-bold text-lg"
              >
                −
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
