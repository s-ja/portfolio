export default function PersonalInfo() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">소개</h2>
      <div className="prose dark:prose-invert max-w-none">
        <p>
          안녕하세요, 웹 프론트엔드 개발자 홍길동입니다. 사용자 경험을 중시하며,
          깔끔하고 효율적인 코드 작성을 지향합니다.
        </p>
        <p>
          React, Next.js, TypeScript를 주로 사용하며, 최신 웹 기술 트렌드를 항상
          주시하고 있습니다. 사용자 중심의 인터페이스 설계와 성능 최적화에
          관심이 많습니다.
        </p>
        <h3>기술 스택</h3>
        <ul>
          <li>
            Frontend: React, Next.js, TypeScript, HTML5, CSS3, Tailwind CSS
          </li>
          <li>Backend: Node.js, Express</li>
          <li>Database: MongoDB, PostgreSQL</li>
          <li>Tools: Git, Webpack, Jest, Cypress</li>
        </ul>
      </div>
    </div>
  );
}
