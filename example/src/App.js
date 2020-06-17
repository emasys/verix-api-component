import React from "react";
import VerixButton from "verix-api-component";

const data = {
  name: {
    first: "emasys",
    last: "endy"
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
  email: "sample@example.com"
};

function App(params) {
  const handleSuccess = results => {
    console.log(results);
  };

  const handleExit = results => {
    console.log(results);
  };

  return (
    <div className="container">
      <div className="button-wrapper">
        <VerixButton
          env="sandbox"
          className="button"
          clientId="e3be2191a21dccd4253b58bf8e11559a"
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

export default App;
