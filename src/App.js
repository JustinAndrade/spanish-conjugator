import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header';

import AdvancedOptions from './components/AdvancedOptions';
import OptionsContainer from './components/OptionsWrapper/OptionsContainer';
import Random from './components/Random/Random';
import RandomFiltered from './components/OptionsWrapper/RandomFiltered/RandomFiltered';

const App = () => {
  return (
    <div style={{ width: '420px', margin: '0 auto' }}>
      <Route path="/" component={Header} />
      <Route path="/options" component={OptionsContainer} />
      <Route path="/advancedOptions" component={AdvancedOptions} />
      <Route exact path="/" component={Random} />
      <Route path="/randomFiltered" component={RandomFiltered} />
    </div>
  );
};

export default App;
