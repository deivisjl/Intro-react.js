import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Contacto from './ruteo/Contacto';
import Inicio from './ruteo/Inicio';
import Nosotros from './ruteo/Nosotros';
import User from './ruteo/User';

function App() {

  return (
    <Router>
        <div className="App container">
            <div className="btn-group">
              <Link to="/" className="btn btn-dark">
                  Inicio
              </Link>
              <Link to="/nosotros" className="btn btn-dark">
                  Nosotros
              </Link>
              <Link to="/contacto" className="btn btn-dark">
                  Contacto
              </Link>
            </div>
            <hr/>
            <Switch>
                <Route path="/nosotros/:id">
                  <User/>
                </Route>
                <Route path="/contacto">
                  <Contacto/>
                </Route>
                <Route path="/nosotros">
                  <Nosotros/>
                </Route>
                <Route path="/" exact>
                  <Inicio/>
                </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
