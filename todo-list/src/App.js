import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <ThemeProvider props={store} theme={store}>
            <Route path="/" exact>
              <Header />
              <MainPage />
            </Route>
            </ThemeProvider>
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
