import { AnimatePresence, MotionConfig } from "motion/react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import { Datenschutz } from "./pages/Datenschutz";
import { GamePage } from "./pages/GamePage";
import { Home } from "./pages/Home";
import { Impressum } from "./pages/Impressum";

export function App() {
  const location = useLocation();
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#inhalt">
        Zum Inhalt
      </a>
      <Nav />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/spiele/:slug" element={<GamePage />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </MotionConfig>
  );
}
