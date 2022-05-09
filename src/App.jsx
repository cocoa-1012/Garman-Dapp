import { useState } from "react";
import { Cloud } from "./components/Cloud";
import { Navbar } from "./components/Navbar";
import { HeroPage } from "./pages/HeroPage";
import { ManifestoPage } from "./pages/ManifestoPage";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#282828] flex flex-col items-center overflow-hidden">
      <Navbar />
      <HeroPage />
      <Cloud />
      <ManifestoPage />
    </div>
  );
}

export default App;
