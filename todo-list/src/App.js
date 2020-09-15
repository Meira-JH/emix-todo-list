import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Header />
            <MainPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
