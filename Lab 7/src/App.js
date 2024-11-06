import { Routes, Route, HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./pages/HomePage";
import GoodsGalleryPage from "./pages/GoodsGalleryPage";
import './App.css';

function App() {
  return (
    <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/gallery" element={<GoodsGalleryPage />} />
        </Routes>
    </HashRouter>
  );
}

export default App;