import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "./screens/Splash";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Recover from "./screens/Recover";
import Interests from "./screens/Interests";
import Code from "./screens/VerificationCode";

const Stack = createStackNavigator();

const user = {
  email: "",
};

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
