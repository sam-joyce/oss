import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Routes from "../../Routes/Routes";
import NavBar from '../../Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes />
    </div>
  );
}

export default App;
