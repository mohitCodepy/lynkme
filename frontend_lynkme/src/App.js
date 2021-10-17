import "./App.css";

function App() {
  return (
    <>
      <div className="main">
        <div className="container inner-div">
          <div className="row">
            <div className="col-md-6 ">
              <button className="btn btn-warning create-btn rounded-pill">Create Zone</button>
            </div>
            <div className="col-md-6">
              <button className="btn btn-danger join-btn rounded-pill">Join Zone</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
