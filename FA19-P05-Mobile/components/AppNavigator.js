import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
const AppNavigator = createStackNavigator(
  {
    Login: Login,
    Signup: Signup,
    Home: Home
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
