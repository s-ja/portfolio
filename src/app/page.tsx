import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <MainContent />
    </div>
  );
}
