import React from 'react';
import PropTypes from 'prop-types';

const App = ({greeting}) => (  <h1>{greeting}!</h1> );
  
  
  export default App;
 App.propTypes = {
    greeting: PropTypes.string.isRequired,  
  };