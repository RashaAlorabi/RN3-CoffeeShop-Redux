import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from "../Components/Login";

import CoffeeList from "../Components/CoffeeList";
import CoffeeDetail from "../Components/CoffeeDetail";
import CoffeeCart from "../Components/CoffeeCart";

const RootStack = createStackNavigator(
  {
    Login: Login,
    CoffeeList: CoffeeList,
    CoffeeDetail: CoffeeDetail,
    CoffeeCart: CoffeeCart
  },
  {
    initialRouteName: "Login",
    cardStyle: {
      backgroundColor: "rgb(20,90,100)"
    },
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "rgb(20,90,100)"
      },
      headerTextStyle: {
        fontWeight: "bold"
      }
    }
  }
);
const AppContainer = createAppContainer(RootStack);
export default AppContainer;
