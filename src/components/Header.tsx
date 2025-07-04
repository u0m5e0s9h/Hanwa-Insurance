
import { Phone,Mail,Home,Search,Menu,X,ChevronDown,} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [zoom, setZoom] = useState(100);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});

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
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("검색어:", searchQuery);
  };

  const increaseZoom = () => {
    if (zoom < 200) setZoom((prev) => prev + 10);
  };

  const decreaseZoom = () => {
    if (zoom > 50) setZoom((prev) => prev - 10);
  };

  const navItems = [
    {
      label: "나눔의행복",
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

  return (
    <header className="w-full">
      {/* 메인 헤더 */}
      <div className="bg-white shadow-sm py-4 px-4 relative">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* 로고 */}
          <div className="flex items-center space-x-3">
            <img
              src="/logo.png"
              alt="한화 로고"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-800">한화손해보험</h1>
              <p className="text-sm text-gray-600">관악지사</p>
            </div>
          </div>

          {/* 데스크탑 네비게이션 */}
          <nav className="hidden md:flex items-center space-x-8 relative">
            {navItems.map((nav) => (
              <div
                key={nav.label}
                className="relative"
                ref={(el) => (dropdownRefs.current[nav.label] = el)}
                onMouseEnter={() => setOpenDropdown(nav.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="text-gray-700 hover:text-orange-500 font-medium transition-colors flex items-center space-x-1">
                  <span>{nav.label}</span>
                  <ChevronDown size={16} />
                </button>
                {openDropdown === nav.label && (
                  <div className="absolute top-8 left-0 bg-white border shadow-lg rounded-lg p-3 space-y-2 z-50 w-64">
                    {nav.items.map((item, idx) => (
                      <Button
                        key={idx}
                        variant="outline"
                        className="w-full justify-start hover:text-orange-500"
                      >
                        {item}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* 검색 & 로그인 - 데스크탑 */}
          <div className="hidden md:flex items-center space-x-2">
            <form onSubmit={handleSearch} className="flex items-center">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="검색어를 입력하세요"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pr-10 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-500"
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </form>
            <Button className="bg-orange-500 text-white px-4 py-2 rounded-none hover:bg-orange-600">
              로그인
            </Button>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden flex items-center space-x-3">
            <Search className="w-5 h-5 text-gray-600 cursor-pointer" />
            <Menu
              className="w-6 h-6 text-gray-600 cursor-pointer"
              onClick={() => setMobileMenuOpen(true)}
            />
          </div>
        </div>
      </div>

      {/* 상단 바 */}
      <div className="bg-gray-800 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Home size={16} />
              <span>홈</span>
            </div>
            <span>나눔의 행복 소개 (시각 대비용)</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 border border-white rounded px-2 py-1">
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

      {/* 모바일 메뉴 */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-4 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">메뉴</h2>
              <X
                className="w-6 h-6 text-gray-600 cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              />
            </div>

            {/* 네비게이션 항목 */}
            <div className="space-y-4">
              {navItems.map((nav) => (
                <div key={nav.label}>
                  <h3 className="text-gray-700 font-medium mb-2">
                    {nav.label}
                  </h3>
                  <div className="space-y-1 pl-2">
                    {nav.items.map((item, idx) => (
                      <Button
                        key={idx}
                        variant="ghost"
                        className="w-full justify-start text-sm text-gray-600 hover:text-orange-500"
                      >
                        {item}
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* 로그인 버튼 */}
            <div className="mt-6">
              <Button className="bg-orange-500 text-white w-full py-2 hover:bg-orange-600">
                로그인
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
