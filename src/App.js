
import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import SearchResultPage from "./pages/SearchResultPage";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchResultPage/>}/>
          
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;