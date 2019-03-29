import React from "react";

const WithAuthentication = App =>
  class extends React.Component {
    render() {
      return <App 
      toggleComponent={this.props.toggleComponent}
      loggedIn={this.props.loggedIn}
      />;
    }
  };

export default WithAuthentication;
