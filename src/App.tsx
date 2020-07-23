
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';

import GlobalStyle from './Styles/global';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Router>
      <Routes />
    </Router>
  </>
);

export default App;