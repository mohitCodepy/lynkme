import React, { Component } from "react";
import { Form } from "react-bootstrap";
export default class CreateZone extends Component {
  render() {
    return (
      <div>
        <Form>
            <div className="mb-3">
              <Form.Check
                inline
                label="Play/Pause"
                name="get_can_pause"
                type='radio'
                id='get_can_pause'
              />
              <Form.Check
                inline
                label="Disable"
                name="get_can_pause"
                type='radio'
                id='get_can_pause'
              />
            </div>
        </Form>
      </div>
    );
  }
}
