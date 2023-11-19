import { useState } from "react";
import React from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import {  Route } from "react-router-dom";

import { BrowserRouter as Router, Switch } from "react-router-dom";

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [btnText, setBtnText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2b2f40";
      document.body.style.Color = "white";
      setBtnText("Enable Light Mode");
      showAlert("Dard mode has been Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "White";
      document.body.style.Color = "black !important";
      setBtnText("Enable Dark Mode");
      showAlert("Light mode has been Enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} btnText={btnText} />
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm
              showAlert={showAlert}
              heading="Enter the text to analyze below"
              mode={mode}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
