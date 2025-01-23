"use client";

import { useState } from "react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  thumbnail?: string;
  role: string;
  contribution: string;
  github: string;
  deploy: string;
  problemSolving: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  const [showProblemSolving, setShowProblemSolving] = useState(false);

  return (
    <div className="border dark:border-gray-800 p-6 rounded-lg shadow-md">
      <Image
        src={project.thumbnail || "/placeholder.svg"}
        alt={project.title}
        width={300}
        height={200}
        className="mb-4 rounded"
      />
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-2">
        {project.description}
      </p>
      <p className="mb-2">
        <strong>역할:</strong> {project.role}
      </p>
      <p className="mb-2">
        <strong>기여:</strong> {project.contribution}
      </p>
      <div className="flex space-x-4 mb-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          GitHub
        </a>
        <a
          href={project.deploy}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          배포 링크
        </a>
      </div>
      <button
        onClick={() => setShowProblemSolving(!showProblemSolving)}
        className="text-sm text-blue-500 hover:underline focus:outline-none"
      >
        {showProblemSolving ? "문제 해결 과정 숨기기" : "문제 해결 과정 보기"}
      </button>
      {showProblemSolving && (
        <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded">
          <p className="text-sm">{project.problemSolving}</p>
        </div>
      )}
    </div>
  );
}
