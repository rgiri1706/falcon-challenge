import React from 'react';
import Main from './Screens/Main';
import { store } from "./store/store.js";
import { Provider } from "react-redux";

import './App.css';

function App() {
  return (
    <Provider store={store}>
       <div className="App">
          <header className="App-header">
            <Main />
          </header>
        </div>
    </Provider>
  );
}

export default App;
