//import react packages
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "react-native-vector-icons";

//import screens
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
import LocalScreen from "./screens/LocalScreen";
import StateScreen from "./screens/StateScreen";

const user = {
  email: "",
};

//initialize navigation variables
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

//bottom tab navigator for the main screens
function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#d5d5d5",
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="home"
              size={size}
              color={focused ? "#62787f" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Bill"
        component={BillScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="newspaper-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Candidate"
        component={CandidateScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Article"
        component={ArticleScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="reader-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    //stack navigator for the login & registration screens
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
