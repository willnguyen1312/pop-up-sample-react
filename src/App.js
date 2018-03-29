import React, { Component } from "react";

const modalStyle = {
  position: "fixed",
  zIndex: 1,
  paddingTop: 100,
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
  overflow: "auto",
  backgroundColor: "rgb(0,0,0,0.4)"
};

const modalContentStyle = {
  backgroundColor: "#fefefe",
  margin: "auto",
  padding: 20,
  border: "1px solid #888",
  width: "80%"
};

const close = {
  color: "#aaaaaa",
  float: "right",
  fontSize: 28,
  fontWeight: "bold",
  cursor: "pointer"
};

const Modal = ({ toggleModel }) => (
  <div id="myModal" style={modalStyle}>
    <div style={modalContentStyle}>
      <span style={close} onClick={toggleModel}>
        &times;
      </span>
      <p>Some text in the Modal..</p>
    </div>
  </div>
);

export default class App extends Component {
  state = {
    showModal: false
  };

  toggleModel = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  render() {
    return (
      <div>
        <h2>Modal Example</h2>
        <button onClick={this.toggleModel}>Open Modal</button>
        {this.state.showModal && <Modal toggleModel={this.toggleModel} />}
      </div>
    );
  }
}
