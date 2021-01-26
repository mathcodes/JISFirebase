import React from 'react';
import PrivateRoute from "./UI/Components/PrivateRoute";
import Main from "./UI/Components/Main";
import SignIn from "./UI/Routes/SignIn";
import {Switch, Route} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div style = {{
      textAlign: "center"
    }}>
      <h1>Redo-less with Redux</h1>
      <Switch>
        <PrivateRoute path = "/todos">
          <Main />
        </PrivateRoute>
        <Route path = "/">
        <SignIn />
        </Route>
      </Switch>

    </div>
  );
}
export default App;
