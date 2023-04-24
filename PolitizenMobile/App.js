//import expo & react
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "react-native-vector-icons";

//import screens
import Login from "./screens/Login";
import Register from "./screens/Register";
import Recover from "./screens/Recover";
import Code from "./screens/VerificationCode";
import Home from "./screens/Home";
import BillScreen from "./screens/BillScreen";
import ArticleScreen from "./screens/ArticleScreen";
import CandidateScreen from "./screens/CandidateScreen";
import Donate from "./screens/Donate";

//Bill Screens
import BillDetailScreen from "./screens/billData";

//import candidate screen
import CandidateInfoScreen from "./screens/candidatesScreen/CandidateInfoScreen";

//article screens
import DemsWinNV from "./screens/articles/DemsWinNV";
import HobbsBeatsLake from "./screens/articles/HobbsBeatsLake";
import VotersKeepAbortion from "./screens/articles/VotersKeepAbortion";
import WalkerSpeech from "./screens/articles/WalkerSpeech";
import DeSantis2024 from "./screens/articles/DeSantis2024";
import TrumpTaxReturns from "./screens/articles/TrumpTaxReturns";

//settings screens
import Settings from "./screens/settings-screens/Settings";
import Notifications from "./screens/settings-screens/Notifications";
import Privacy from "./screens/settings-screens/Privacy";
import Location from "./screens/settings-screens/Location";

const user = {
  user: "",
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
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
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
        <Stack.Screen name="Login" component={Login} initialParams={user} />
        <Stack.Screen
          name="Register"
          component={Register}
          initialParams={user}
        />
        <Stack.Screen name="Recover" component={Recover} initialParams={user} />
        <Stack.Screen name="Code" component={Code} initialParams={user} />
        <Stack.Screen name="Donate" component={Donate} />
        <Stack.Screen name="CandidateInfo" component={CandidateInfoScreen} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Privacy" component={Privacy} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="BillDetailScreen" component={BillDetailScreen} />
        <Stack.Screen name="DemsWinNV" component={DemsWinNV} />
        <Stack.Screen name="HobbsBeatsLake" component={HobbsBeatsLake} />
        <Stack.Screen
          name="VotersKeepAbortion"
          component={VotersKeepAbortion}
        />
        <Stack.Screen name="WalkerSpeech" component={WalkerSpeech} />
        <Stack.Screen name="DeSantis2024" component={DeSantis2024} />
        <Stack.Screen name="TrumpTaxReturns" component={TrumpTaxReturns} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
