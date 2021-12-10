import "./App.css";
import ChooseZone from "./components/ChooseZone";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateZone from "./components/CreateZone";
import { Route, useLocation, Routes } from "react-router-dom";
import JoinZone from "./components/JoinZone";
import React, { useEffect, useState } from "react";

function App() {
  const location = useLocation();

  const [currentPath, setcurrentPath] = useState({
    current: "/",
    isLoding : true
  })

  const locationFetch = () => {
    setcurrentPath({
      current: location.pathname,
    })
    currentPath.isLoding = false
    console.log(currentPath.current);
  };

  useEffect(() => {
    if( currentPath.isLoding === true ){
      locationFetch()
    }
    
  })
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="row">
            <div className={`col-md-${currentPath.current==='/' ? '12':'6'} choosezone-class`}>
              <ChooseZone />
            </div>
            <div className={`col-md-${currentPath.current!=='/' ? '12':'6'}`}>
              <Routes>
                <Route exact path="/create-zone" element={<CreateZone />} />
                <Route exact path="/join-zone" element={<JoinZone />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
