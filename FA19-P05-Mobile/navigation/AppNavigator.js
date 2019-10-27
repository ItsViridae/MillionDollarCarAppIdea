import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "../screens/Login";
import Signup from "../screens/Signup";

const AppNavigator = createStackNavigator(
  {
    Login: Login,
    Signup: Signup
  },
  {
    initialRouteName: "Login"
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

export default createAppContainer(AppNavigator);
