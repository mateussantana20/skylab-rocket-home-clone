import React from 'react';

import { Switch,Route } from 'react-router-dom'

import Home from '../pages/Home';
import GoStack from '../pages/GoStack';
import GoStackJourney from '../pages/GoStackJourney';


const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home}/>

    <Route path="/goStack" component={GoStack}/>
    <Route path="/gostack-journey" component={GoStackJourney}/>
  </Switch>
);

export default Routes;
