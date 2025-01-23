"use client";

import { useState } from "react";
import { Home, User, FolderGit2, Book, Sun, Moon } from "lucide-react";

export default function Sidebar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <aside className="w-64 border-r border-gray-200 dark:border-gray-800 h-screen sticky top-0 p-6 bg-white dark:bg-gray-900">
      <div className="h-full flex flex-col">
        <h1 className="text-xl font-bold mb-8">홍길동</h1>

        <nav className="flex-1">
          <ul className="space-y-2">
            <li>
              <a
                href="#home"
                className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Home className="w-5 h-5" />
                <span>홈</span>
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <User className="w-5 h-5" />
                <span>소개</span>
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <FolderGit2 className="w-5 h-5" />
                <span>프로젝트</span>
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Book className="w-5 h-5" />
                <span>교육</span>
              </a>
            </li>
          </ul>
        </nav>

        <button
          onClick={toggleDarkMode}
          className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
        >
          {darkMode ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
          <span>{darkMode ? "라이트 모드" : "다크 모드"}</span>
        </button>
      </div>
    </aside>
  );
}
