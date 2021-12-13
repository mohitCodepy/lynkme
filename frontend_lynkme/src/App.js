import "./App.css";
import ChooseZone from "./components/ChooseZone";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateZone from "./components/CreateZone";
import JoinZone from "./components/JoinZone";
import DummyDiv from "./components/DummyDiv";
import {animated, useTransition} from 'react-spring';
import { useState } from "react";

function App() {
  const [showCreate, setshowCreate] = useState(false)
 
  const transition = useTransition(showCreate, {
    from : {opacity : 0, x : 150, y : 150},
    enter : {opacity : 1, x : 0, y : 0},
    leave : {opacity : 0, x : 200, y : -150}
  }) 
 

  return (
    <>
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 chooose-zone-div">
              <ChooseZone setshowCreate = {setshowCreate} />
              </div>
              <div className="col-md-6 col-sm-12 upper-div justify-content-center d-flex align-items-center">
              { transition((style, item) =>
                item ? <animated.div style={style}> <DummyDiv /> </animated.div> : '' 
              )}
              </div> 
              <div className="col-md-6 col-sm-12"  hidden='true' >
              {transition((style, item) =>
                item ? <animated.div style={style}> <CreateZone /> </animated.div> : '' 
              )}
              </div>
              <div className="col-md-6 col-sm-12" upper-div hidden='true'>
              <JoinZone />
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
