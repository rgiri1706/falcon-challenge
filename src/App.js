import React from 'react';
import Main from './Screens/Main';
import Result from './Screens/Result';
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
            <header className="App-header">
              <Switch>
                  <Route path={"/"} exact component={Main} />
                  <Route path={"/result"}  component={Result} />
              </Switch>
            </header>
          </div>
      </Provider>
    </Router>
  );
}

export default App;
