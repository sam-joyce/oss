import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Routes from "../../Routes/Routes";
import NavBar from '../../Components/NavBar/NavBar';
import Footer from "../../Components/Footer/Footer";
// import ContactBanner from '../../Components/Utility/ContactBanner/ContactBanner';

function App() {
  return (
    <div className="App">
      {/* <ContactBanner /> */}
      {/* <NavBar /> */}
      <Routes />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
