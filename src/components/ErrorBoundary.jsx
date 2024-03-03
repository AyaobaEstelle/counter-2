import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null };
    }
  
    componentDidCatch(error, errorInfo) {
      this.setState({
        error: error,
        errorInfo: errorInfo,
      });
    }
  
    render() {
      if (this.state.errorInfo) {
        return (
          <div className="error">
            <h1>Oh no! You crashed the Counter App!</h1>
            <img src="./images/broken-bulb.png" alt="" />
            <a href="./">
                <p className="btn-back">Back to Home</p>
            </a>
          </div>
        );
      }
  
      return this.props.children;
    }
  }

export default ErrorBoundary;