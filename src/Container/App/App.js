import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Routes from "../../Routes/Routes";
import NavBar from '../../Components/NavBar/NavBar';
import Footer from "../../Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
