export default function Education() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">교육</h2>
      <div className="space-y-4">
        <div className="border dark:border-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">
            프론트엔드 개발자 양성 과정
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            기간: 2023.01 - 2023.12
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
            <li>HTML, CSS, JavaScript 심화 학습</li>
            <li>React와 Next.js를 활용한 웹 애플리케이션 개발</li>
            <li>RESTful API 설계 및 구현</li>
            <li>Git을 활용한 버전 관리 및 협업</li>
          </ul>
        </div>
        <div className="border dark:border-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">컴퓨터 공학 학사</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            기간: 2019.03 - 2023.02
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
            <li>자료구조와 알고리즘</li>
            <li>데이터베이스 시스템</li>
            <li>운영체제 및 컴퓨터 네트워크</li>
            <li>소프트웨어 공학</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
