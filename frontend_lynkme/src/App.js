

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PlayGround from "./components/PlayGround";
import HomePage from './components/HomePage';

function App() {

  return (
    <div className="main">
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="music-playground/:code" element={<PlayGround />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
