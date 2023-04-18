import React, { Component } from "react";
import "./App.css";
import { Alert, Button,Modal } from "react-bootstrap";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        showModal:true
    };
  }
  render() {
    return (
      <div>
        <Alert variant="info">
          Test MSG <Alert.Link href="#">Home</Alert.Link>
        </Alert>
        <Button variant="info" size="">
          click
        </Button>
        <Modal show={this.state.showModal} onHide={()=> this.setState({showModal: false})}>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
