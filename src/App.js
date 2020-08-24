import React from 'react';
import Main from './Screens/Main';
import Result from './Screens/Result';
import AppBar from '@material-ui/core/AppBar';
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Title, BottomTitle, header, footer } from './styles/App';
import './App.css';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
            <div>
              <AppBar position="static" style={header}>
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
              <AppBar position="static" style={footer}>
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
