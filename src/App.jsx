import { useState } from "react";
import { Cloud } from "./components/Cloud";
import { Navbar } from "./components/Navbar";
import { HeroPage } from "./pages/HeroPage";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-red-400 flex flex-col items-center overflow-hidden">
      <Navbar />
      <HeroPage />
      <Cloud />
    </div>
  );
}

export default App;
