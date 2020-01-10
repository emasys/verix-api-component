# verix-api-component

> A simple React component for easy integration with [Verix API](https://docs.verixapi.com/docs/welcome)

[![NPM](https://img.shields.io/npm/v/verix-api-component.svg)](https://www.npmjs.com/package/verix-api-component) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save verix-api-component
```

## Usage

```jsx
import React, { Component } from "react";

import VerixAPIButton from "verix-api-component";

class Example extends Component {
  handleSuccess = results => {
    console.log(results);
  };

  handleExit = results => {
    console.log(results);
  };

  render() {
    return (
      <VerixAPIButton
        env="sandbox"
        clientId="__client_id___"
        onSuccess={this.handleSuccess}
        onExit={this.handleExit}
      >
        Download Tax data
      </VerixAPIButton>
    );
  }
}
```

## All Props

```jsx
<VerixButton
  env="sandbox|development|production"
  style={{__your_button_style__}}
  className="__button_class__"
  clientId="__client_id___"
  onSuccess={this.handleSuccess}
  onExit={this.handleExit}
>
  button label
</VerixButton>
```

# Contributing

## Development
```bash
# install dependencies
npm install

# run module locally
npm start

# run example app
cd example && npm install
npm start

# view on localhost:3000
```

## License

MIT © [emasys](https://github.com/emasys)
