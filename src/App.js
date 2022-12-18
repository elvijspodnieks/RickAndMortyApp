import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./containers/Header";
import CharactersListing from "./containers/CharacterstListing";
import About from "./containers/About";
import Footer from "./containers/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/chars" element={<CharactersListing />} />
          <Route>404</Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
