import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes';


import Global from './styles/global';

const App:React.FC = () => {
  return (
    <Router>
      <Routes/>
      <Global/>
    </Router>
  );
}

export default App;
