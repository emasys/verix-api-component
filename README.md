# verix-api-component

> A simple React component for easy [Verix API](https://docs.verixapi.com/docs/welcome) integration

[![NPM](https://img.shields.io/npm/v/verix-api-component.svg)](https://www.npmjs.com/package/verix-api-component) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save verix-api-component
```

## Demo

[Demo](https://emasys.github.io/verix-api-component/)

## Usage

Add verixapi css to your index.html file - https://app.verixapi.com/connect.css

```jsx
import React, { Component } from "react";
import VerixAPIButton from "verix-api-component";

const data = {
  name: {
    first: "Ben",
    last: "Smith"
  },
  birthdate: {
    month: 11,
    day: 3,
    year: 1964
  },
  mobileNumber: "9394442113",
  socialSecurityNumber: "344675890",
  filingAddress: {
    address: "744 Evergreen Terrace",
    address2: "",
    city: "Springfield",
    state: "OR",
    zip: "97403"
  },
  filingStatus: "Married Filing Jointly",
  email: "bensmith@gmail.com"
};

function Example(params) {
  const handleSuccess = results => {
    console.log(results);
  };

  const handleExit = results => {
    console.log(results);
  };

  return (
    <div className='container'>
      <div className='button-wrapper'>
        <VerixButton
          env='sandbox'
          className='button'
          clientId='__client_Id__'
          data={data}
          onSuccess={handleSuccess}
          onExit={handleExit}
        >
          Download Tax data
        </VerixButton>
      </div>
    </div>
  );
}
```

## All Props

```jsx

dataProps = {
  name: { // optional
    first: string,
    last: string
  },
  birthdate: { // optional
    month: 11,
    day: 3,
    year: 1964
  },
  mobileNumber: string, // optional
  socialSecurityNumber: string, // optional
  filingAddress: { //optional
    address: string,
    address2: string,
    city: string,
    state: string,
    zip: string
  },
  filingStatus: string, //optional
  email: string // required
}

<VerixAPIButton
  env="sandbox|development|production"
  style={{__your_button_style__}}
  className="__button_class__"
  clientId="__client_id___"
  data={dataProps}
  onSuccess={this.handleSuccess}
  onExit={this.handleExit}
>
  button label
</VerixAPIButton>
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
