import React from 'react';
import Main from './Screens/Main';
import styled from "styled-components";
import Result from './Screens/Result';
import AppBar from '@material-ui/core/AppBar';
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

const Title = styled.div`
    font-size: 57px;
    padding-bottom: 2%;
    width: 100%;
    font-family: 'Titillium Web', sans-serif;
`;

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
            <div>
              <AppBar position="static" style={{minHeight: "13vh"}}>
                <Title>
                  Finding Falcon
                </Title>
              </AppBar>
            </div>
              <Switch>
                  <Route path={"/"} exact component={Main} />
                  <Route path={"/result"}  component={Result} />
              </Switch>
          </div>
      </Provider>
    </Router>
  );
}

export default App;
