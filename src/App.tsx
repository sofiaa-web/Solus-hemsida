import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { ScrollReset } from "./components/ScrollReset";
import Home from "./pages/Home";
import Process from "./pages/Process";
import ProcessDetail from "./pages/ProcessDetail";
import UserTesting from "./pages/Testing";
import SolusDetails from "./pages/Solus";
import GrafiskDesign from "./pages/GrafiskDesign";
import { AnimatePresence } from "motion/react";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollReset />
      <div className="min-h-screen bg-solus-bg">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/process" element={<Process />} />
            <Route path="/process/:id" element={<ProcessDetail />} />
            <Route path="/tester" element={<UserTesting />} />
            <Route path="/solus" element={<SolusDetails />} />
            <Route path="/grafisk-design" element={<GrafiskDesign />} />
          </Routes>
        </AnimatePresence>
        <Footer />
        <ScrollToTop />
      </div>
    </BrowserRouter>
  );
}
