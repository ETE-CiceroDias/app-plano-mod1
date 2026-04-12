import { useState } from "react";
import MobileLayout  from "./layouts/MobileLayout";
import DesktopLayout from "./layouts/DesktopLayout";

export default function App() {
  const [disciplinaAtiva, setDisciplinaAtiva] = useState(null);
  return (
    <div className="font-sans">
      <div className="lg:hidden">
        <MobileLayout disciplinaAtiva={disciplinaAtiva} setDisciplinaAtiva={setDisciplinaAtiva} />
      </div>
      <div className="hidden lg:block lg:text-base">
        <DesktopLayout disciplinaAtiva={disciplinaAtiva} setDisciplinaAtiva={setDisciplinaAtiva} />
      </div>
    </div>
  );
}
