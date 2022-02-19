import React from 'react';
import Home from './../Pages/Home'
import Header from './../Components/Header'
import { Switch, Route } from 'react-router-dom';
const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
