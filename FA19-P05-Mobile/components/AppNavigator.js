import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "./Login";
import Signup from "./Signup";
const AppNavigator = createStackNavigator(
  {
    Login: Login,
    Signup: Signup
  },
  {
    initialRouteName: "Login"
  }
);

export default createAppContainer(AppNavigator);
