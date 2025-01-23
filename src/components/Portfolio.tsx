"use client";

import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import Projects from "./Projects";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("info");

  return (
    <div className="max-w-[210mm] mx-auto bg-white shadow-lg">
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">내 포트폴리오</h1>
        <div className="mb-6 print:hidden">
          <button
            onClick={() => setActiveTab("info")}
            className={`mr-2 px-4 py-2 ${
              activeTab === "info" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            기본 정보
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`mr-2 px-4 py-2 ${
              activeTab === "education"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            교육 과정
          </button>
          <button
            onClick={() => setActiveTab("projects")}
            className={`mr-2 px-4 py-2 ${
              activeTab === "projects"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            프로젝트
          </button>
        </div>
        <div className="print:block">
          <PersonalInfo />
          <Education />
          <Projects />
        </div>
        <div className="print:hidden">
          {activeTab === "info" && <PersonalInfo />}
          {activeTab === "education" && <Education />}
          {activeTab === "projects" && <Projects />}
        </div>
      </div>
    </div>
  );
}
