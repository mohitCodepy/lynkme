

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PlayGround from "./components/PlayGround";
import HomePage from './components/HomePage';
import axios from "axios";

function App() {
  axios.defaults.withCredentials = true;
  window.BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  return (
    <div className="main">
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="music-playground/:zone" element={<PlayGround />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
