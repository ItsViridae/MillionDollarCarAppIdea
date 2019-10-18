import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./component/Layout/Navbar";
import Signup from "./component/Authentication/Signup";
import Login from "./component/Authentication/Login";

function App() {
  const [customerLogin, setCustomerLogin] = useState([
    { username: "", password: "" }
  ]);

  return (
    <div className="App">
      <Navbar isLoggedIn={!!customerLogin} />
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route
          path="/login"
          render={() => (
            <Login
              customerLogin={customerLogin}
              setCustomerLogin={setCustomerLogin}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
