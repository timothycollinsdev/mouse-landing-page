import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../scss/main.scss";
import Header from "./Header";
import Main from "./Main";
import AI from "./AI";
import Product from "./Product";
import Testo from "./Testo";
import Footer from "./Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <AI />
      <Product />
      <Testo />
      <Footer />
    </div>
  );
}

export default App;
