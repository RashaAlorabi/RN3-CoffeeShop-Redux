import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import { Icon } from "native-base";

import AuthStack from "./AuthStack";
import CoffeeStack from "./CoffeeStack";
import OrdersStack from "./OrdersStack";

const BottomTab = createBottomTabNavigator(
  {
    Auth: AuthStack,
    Coffee: CoffeeStack,
    Orders: OrdersStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName = "";
        let iconType = "";
        if (routeName === "Auth") {
          iconName = "account";
          iconType = "MaterialCommunityIcons";
        } else if (routeName === "Coffee") {
          iconName = "coffee";
          iconType = "MaterialCommunityIcons";
        } else if (routeName === "Orders") {
          iconName = "cart";
          iconType = "MaterialCommunityIcons";
        }
        return (
          <Icon
            name={iconName}
            type={iconType}
            style={{ color: tintColor, fontSize: 25 }}
          />
        );
      }
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "#b8cdd0",
      inactiveTintColor: "white",

      style: {
        backgroundColor: "rgb(20,90,100)"
      }
    }
  }
);

export default BottomTab;
