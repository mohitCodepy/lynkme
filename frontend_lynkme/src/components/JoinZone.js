import React, { Component } from "react";
import Button from "react-bootstrap/Button";
export default class JoinZone extends Component {
  render() {
    return (
      <>
        <div>
          <Button/>
            <h1>Create Room</h1>
            <div className="col-sm-6">
                <button type="radio" >Guest Can Pause</button>
                
            </div>
        </div>
      </>
    );
  }
}