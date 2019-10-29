import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./component/Layout/Navbar"
import Signup from "./component/Authentication/Signup";
import Login from "./component/Authentication/Login";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route
          path="/login"
          render={() => (
            <Login
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
