import { Icon } from "native-base";
import React from "react";

import { createStackNavigator, createAppContainer } from "react-navigation";

import CoffeeCart from "../Components/CoffeeCart";

const OrdersStack = createStackNavigator(
  {
    CoffeeCart: CoffeeCart
  },
  {
    initialRouteName: "CoffeeCart",
    cardStyle: {
      backgroundColor: "rgb(20,90,100)"
    }
  }
);

export default OrdersStack;
