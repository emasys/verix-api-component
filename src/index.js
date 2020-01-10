import React, { Component } from 'react'
import Script from 'react-load-script'
import PropTypes from 'prop-types'

class VerixApiButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      disabledButton: true,
      linkLoaded: false
    }
  }

  static propTypes = {
    // The API environment
    env: PropTypes.oneOf(['sandbox', 'development', 'production']).isRequired,

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

  onScriptError = () => {
    console.error('There was an issue loading the link-initialize.js script')
  }

  onScriptLoaded = () => {
    const { onSuccess, onExit } = this.props
    if (!onSuccess || !onExit) {
      return console.error('onSuccess() and onExit() props are required')
    }
    this.setState({ disabledButton: false })
  }

  handleVerix = () => {
    const { onSuccess, onExit } = this.props
    const configuration = {
      clientId: this.props.clientId,
      environment: this.props.env
    }
    const Verix = window.Verix
    const verix = new Verix(configuration)
    verix.launch()
    verix.success((results) => onSuccess(results))
    verix.cancel((results) => onExit(results))
  };

  handleOnClick = (event) => {
    this.handleVerix()
  }

  exit(configurationObject) {
    if (this.linkHandler) {
      this.linkHandler.exit(configurationObject)
    }
  }

  render() {
    return (
      <div>
        <button
          onClick={this.handleOnClick}
          disabled={this.state.disabledButton}
          style={this.props.style}
          className={this.props.className}
        >
          {this.props.children}
        </button>
        <Script
          url='https://app.verixapi.com/connect.js'
          onError={this.onScriptError}
          onLoad={this.onScriptLoaded}
        />
      </div>
    )
  }
}

export default VerixApiButton
