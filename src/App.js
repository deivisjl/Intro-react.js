import React, { Fragment, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Pokemones from './pokemones/Pokemones';

import {Provider} from 'react-redux'
import generateStore from './redux/store';

function App() {

  const store = generateStore()

  return (
    <Provider store={store}>
        <Pokemones/>
    </Provider>
  );
}

export default App;
