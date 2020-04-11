import React from "react";
import Script from "react-load-script";
import PropTypes from "prop-types";

function VerixApiButton(props) {
  const onScriptError = () => {
    console.error("There was an issue loading the link-initialize.js script");
  };
  const onScriptLoaded = () => {
    const { onSuccess, onExit } = props;
    if (!onSuccess || !onExit) {
      console.error("onSuccess() and onExit() props are required");
      return false
    }
    return true;
  };
  const handleVerix = () => {
    const { onSuccess, onExit } = props;
    const configuration = {
      clientId: props.clientId,
      environment: props.env
    };
    const Verix = window.Verix;
    const verix = new Verix(configuration);
    verix.launch();
    verix.success(results => onSuccess(results));
    verix.cancel(results => onExit(results));
  };
  const handleOnClick = event => {
    handleVerix();
  };
  const disabled = onScriptLoaded();
  return (
    <div>
      <button
        onClick={handleOnClick}
        disabled={!disabled}
        style={props.style}
        className={props.className}
      >
        {props.children}
      </button>
      <Script
        url='https://app.verixapi.com/connect.js'
        onError={onScriptError}
        onLoad={onScriptLoaded}
      />
    </div>
  );
}

VerixApiButton.propTypes = {
  // The API environment
  env: PropTypes.oneOf(["sandbox", "development", "production"]).isRequired,

  // Publicly-exposed string, accessed via developer dashboard, used to initialize Verix Connect,
  // identify your application, and build authorization URLs presented to users
  clientId: PropTypes.string.isRequired,

  // A function that is called after a successful token exchange
  // The function takes one argument - results
  onSuccess: PropTypes.func.isRequired,

  // A function that is called when a user has specifically exited Link flow
  onExit: PropTypes.func,

  // Button Class names as a String
  className: PropTypes.string,

  // Button Styles as an Object
  style: PropTypes.object,

  children: PropTypes.any
};

export default VerixApiButton;
