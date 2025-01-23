import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "포트폴리오 웹사이트",
      description: "Next.js와 Tailwind CSS를 사용한 반응형 포트폴리오 웹사이트",
      thumbnail: "/portfolio-thumbnail.jpg",
      role: "프론트엔드 개발",
      contribution: "디자인 및 전체 개발",
      github: "https://github.com/username/portfolio",
      deploy: "https://portfolio.com",
      problemSolving:
        "다크 모드 구현 시 발생한 hydration 문제를 React의 useEffect를 활용하여 해결하였습니다.",
    },
    {
      title: "온라인 쇼핑몰",
      description: "React와 Node.js를 사용한 풀스택 이커머스 플랫폼",
      thumbnail: "/ecommerce-thumbnail.jpg",
      role: "풀스택 개발",
      contribution: "프론트엔드 개발 및 백엔드 API 구현",
      github: "https://github.com/username/ecommerce",
      deploy: "https://ecommerce-example.com",
      problemSolving:
        "상품 검색 기능 구현 시 발생한 성능 이슈를 debounce 기법을 적용하여 해결하였습니다.",
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">프로젝트</h2>
      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
