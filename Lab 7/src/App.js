import { Routes, Route, HashRouter } from "react-router-dom";
import Header from './components/Header';
import Content from './components/Content/Content';
import PopupMessage from './components/PopupMessage/PopupMessage';
import Navbar from "./components/Navbar/Navbar";
import GoodsGallery from "./components/GoodsGallery/GoodsGallery";
import './App.css';

function App() {
  return (
    <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<> <Header /> <Content /> <PopupMessage /> </>} />
          <Route path="/gallery" element={<> <GoodsGallery /> </>} />
        </Routes>
    </HashRouter>
  );
}

export default App;