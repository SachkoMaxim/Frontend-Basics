import { Routes, Route, HashRouter } from "react-router-dom";
import Header from './components/Header';
import Content from './components/Content/Content';
import PopupMessage from './components/PopupMessage/PopupMessage';
import './App.css';

function App() {
  return (
    <HashRouter>
        <Routes>
          <Route path="/" element={<> <Header /> <Content /> <PopupMessage /> </>} />
        </Routes>
    </HashRouter>
  );
}

export default App;