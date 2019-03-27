import React from 'react';


const WithAuthentication = App =>
  class extends React.Component {
    render() {
      return <App />;
    }
  };

  export default WithAuthentication
