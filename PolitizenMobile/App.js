import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//screens
import Splash from "./screens/Splash";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Recover from "./screens/Recover";
import Interests from "./screens/Interests";
import Code from "./screens/VerificationCode";
import HomeScreen from "./screens/HomeScreen";
import BillScreen from "./screens/BillScreen";
import ArticleScreen from "./screens/ArticleScreen";
import CandidateScreen from "./screens/CandidateScreen";

const user = {
  email: "",
};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName="HomeScreen">
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="Bill" component={BillScreen} />
      <Tab.Screen name="Candidate" component={CandidateScreen} />
      <Tab.Screen name="Article" component={ArticleScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Splash" component={Splash} initialParams={user} />
        <Stack.Screen name="Login" component={Login} initialParams={user} />
        <Stack.Screen
          name="Register"
          component={Register}
          initialParams={user}
        />
        <Stack.Screen name="Recover" component={Recover} initialParams={user} />
        <Stack.Screen
          name="Interests"
          component={Interests}
          initialParams={user}
        />
        <Stack.Screen name="Code" component={Code} initialParams={user} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
