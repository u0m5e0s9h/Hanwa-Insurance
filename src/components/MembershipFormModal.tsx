import React from "react";

const MembershipFormModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg p-6 relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl font-bold"
        >
          ✕
        </button>

        {/* Header */}
        <h2 className="text-xl font-bold text-center text-gray-900">
          (단체) 나눔의행복 가입 신청
        </h2>
        <p className="text-sm text-center text-gray-600 mt-1 mb-4">
          한화손해보험 관악사업소 귀중
        </p>

        {/* Notice Box */}
        <div className="bg-orange-50 border-l-4 border-orange-500 text-gray-800 p-4 mb-6 text-sm">
          <p>
            다음세대의 미래를 위한 투자, 나눔의행복에 가입해주셔서 감사합니다.
            <br />
            아래의 내용을 입력해 주시면, 담당자가 신속하게 가입상담을 진행해드리겠습니다.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4 text-sm">
          {/* 단체명 */}
          <div>
            <label className="block mb-1 font-medium">단체명</label>
            <input
              type="text"
              placeholder="단체명을 입력해주세요."
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          {/* 단체장명 + 대표 연락처 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">단체장명</label>
              <input
                type="text"
                placeholder="단체장명을 입력해주세요."
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">대표 연락처</label>
              <input
                type="text"
                placeholder="대표 연락처를 입력해주세요."
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
          </div>

          {/* 주소 */}
          <div>
            <label className="block mb-1 font-medium">주소</label>
            <input
              type="text"
              placeholder="주소를 입력해주세요."
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          {/* 담당자명 + 담당자 연락처 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">담당자명</label>
              <input
                type="text"
                placeholder="담당자명을 입력해주세요."
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">담당자 연락처</label>
              <input
                type="text"
                placeholder="담당자 연락처를 입력해주세요."
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
          </div>

          {/* 사업자등록증 */}
          <div>
            <label className="block mb-1 font-medium">사업자등록증</label>
            <input
              type="file"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-start gap-2">
            <input type="checkbox" required className="mt-1" />
            <p className="text-sm text-gray-700">
              접수된 정보가 상담을 위해 제공되는 것에 동의합니다.{" "}
              <span className="text-orange-600 font-semibold">(필수)</span>
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-semibold text-sm"
          >
            상담 신청하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default MembershipFormModal;
