import "./App.css";
import ChooseZone from "./components/ChooseZone";
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateZone from "./components/CreateZone";

function App() {

  return (
    <>
     <div className="main">
      <ChooseZone/>
      <CreateZone/>
      </div>
    </>
  );
}

export default App;
