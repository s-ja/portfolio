import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import Projects from "./Projects";

export default function MainContent() {
  return (
    <main className="flex-1 p-8 max-w-[210mm]">
      <section
        id="home"
        className="min-h-screen flex items-center justify-center flex-col"
      >
        <h1 className="text-6xl font-bold mb-4">안녕하세요</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          웹 프론트엔드 개발자 홍길동입니다
        </p>
      </section>

      <section id="about" className="min-h-screen">
        <PersonalInfo />
      </section>

      <section id="projects" className="min-h-screen">
        <Projects />
      </section>

      <section id="education" className="min-h-screen">
        <Education />
      </section>
    </main>
  );
}
