import React from 'react';
import Header from './components/header'
import router from "@/router/router";
import { Router } from "react-router-dom";
import customHistory from "@/router/history";


function App() {
  return (
    <div className="App" style={{height: '100%'}}>
      <Header />
      <Router history={customHistory}>
        {router}
      </Router>
    </div>
  );
}

export default App;
