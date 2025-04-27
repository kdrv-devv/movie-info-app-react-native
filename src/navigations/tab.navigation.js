import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Home from "../screens/home";
import Detailed from "../screens/detailed";
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({route}) => ({
        tabBarIcon:({focused ,color , size }) => {
            let iconName = null
            if(route.name === "Home"){
                iconName = focused ? "home" :  "home-outline"
            }else if( route.name === "Detail"){
                iconName = focused ? "ellipsis-vertical" : "ellipsis-vertical-outline"
            }
            
            return <Ionicons name={iconName} size={size} color={color}/>
        },
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor:"black"
      })}>
        <Tab.Screen name="Home" component={Home}  options={{headerShown:false}} />
        <Tab.Screen name="Detail" component={Detailed} options={{headerShown:false}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
