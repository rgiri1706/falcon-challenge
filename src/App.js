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
    font-size: 54px;
    padding-bottom: 2%;
    width: 100%;
    font-family: 'Titillium Web', sans-serif;
`;

const BottomTitle = styled.div`
    font-size: 16px;
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
              <AppBar position="static" style={{ position: "fixed", top: 0, width: "100%"}}>
                <Title>
                  Finding Falcon
                </Title>
              </AppBar>
            </div>
              <Switch>
                  <Route path={"/"} exact component={Main} />
                  <Route path={"/result"}  component={Result} />
              </Switch>
              <div>
              <AppBar position="static" style={{ position: "fixed", bottom: 0, width: "100%"}}>
                <BottomTitle>
                    © 2020 geektrust.in. All rights reserved.
                </BottomTitle>
              </AppBar>
            </div>  
          </div>
      </Provider>
    </Router>
  );
}

export default App;
