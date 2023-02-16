import "./App.css";
import Home from "./pages/Home";
import Contact from './pages/Contact';
import Card1 from "./pages/Card1";
import Card2 from "./pages/Card2";
import Card3 from "./pages/Card3";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio/1" element={<Card1 />} />
        <Route path="/portfolio/2" element={<Card2 />} />
        <Route path="/portfolio/3" element={<Card3 />} />
      </Routes>
    </div>
  );
}

export default App;
