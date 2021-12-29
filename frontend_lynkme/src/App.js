import "./App.css";
import ChooseZone from "./components/ChooseZone";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateZone from "./components/CreateZone";
import JoinZone from "./components/JoinZone";
// import DummyDiv from "./components/DummyDiv";
import {animated, useTransition} from 'react-spring';
import { useState } from "react";

function App() {
  const [showCreate, setshowCreate] = useState(false)
  // const [showJoin, setshowJoin] = useState(false)
 
  const Createtransition = useTransition(showCreate, {
    from : {position: 'absolute', opacity : 0, x : 200, y : 300, overflow : 'hidden'},
    enter : {opacity : 1, x : 0, y : 0},
    leave : {opacity : 0, x : 200, y : -300},
    trail: 300
  }) 
  // const Jointransition = useTransition(showJoin, {
  //   from : {opacity : 0, x : 150, y : 150},
  //   enter : {opacity : 1, x : 0, y : 0},
  //   leave : {opacity : 0, x : 200, y : -150}
  // }) 
 

  return (
    <>
      <div className="main">
        <div className="container">
          <div className="row flex-column-reverse flex-md-row">
            <div className="col-md-6 chooose-zone-div overflow-hidden">
              <ChooseZone setshowCreate = {setshowCreate} showCreate={showCreate}/>
              </div>
              {/* <div className="col-md-6 col-sm-12 upper-div justify-content-center d-flex align-items-center">
              { transition((style, item) =>
                item ? <animated.div style={style}> <DummyDiv /> </animated.div> : '' 
              )}
              </div>  */}
              <div className="col-md-6 upper-div justify-content-center d-flex align-items-center overflow-hidden">
                {Createtransition((style, item) =>
                  item ? <animated.div style={style}> <CreateZone /> </animated.div> : <animated.div style={style}> <JoinZone /> </animated.div> 
                )}
              </div> 
              {/* <div className="col-md-6 col-sm-12 upper-div justify-content-center d-flex align-items-center" >
                {Jointransition((style, item1) =>
                  item1 ? <animated.div style={style}> <JoinZone /> </animated.div> : '' 
                )}
              </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
