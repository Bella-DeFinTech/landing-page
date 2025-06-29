"use client";

import { Translations } from "@/locales/en-US";
import { useEffect, useState } from "react";

export function Modal({ translations }: { translations: Translations }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // 页面加载1秒后显示弹窗
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handlePlayNow = () => {
    // 这里可以添加跳转到游戏页面的逻辑
    window.open("https://coinflip.bella.fi", "_blank");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-10"
        onClick={handleClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-lg px-12 pt-16 pb-12 max-w-2xl shadow-2xl">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Content */}
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-4 leading-relaxed">
            {translations.modal.title}
            <br />
            <br />
            {translations.modal.description}
          </h2>

          {/* Play Now Button */}
          <button
            onClick={handlePlayNow}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 mt-8 rounded-lg transition-colors"
          >
            {translations.modal.playButton}
          </button>
        </div>
      </div>
    </div>
  );
}
