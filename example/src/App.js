import React, { Component } from "react";

import VerixButton from "verix-api-component";

export default class App extends Component {
  handleSuccess = results => {
    console.log(results);
  };

  handleExit = results => {
    console.log(results);
  };

  render() {
    return (
      <div className="container">
        <div className="button-wrapper">
          <VerixButton
            env="sandbox"
            className="button"
            clientId="__client_key___"
            onSuccess={this.handleSuccess}
            onExit={this.handleExit}
          >
            Download Tax data
          </VerixButton>
        </div>
      </div>
    );
  }
}
