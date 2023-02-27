//import expo & react
import "react-native-gesture-handler";
import React from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "react-native-vector-icons";

//import screens
import Splash from "./screens/Splash";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Recover from "./screens/Recover";
import Code from "./screens/VerificationCode";
import HomeScreen from "./screens/HomeScreen";
import BillScreen from "./screens/BillScreen";
import ArticleScreen from "./screens/ArticleScreen";
import CandidateScreen from "./screens/CandidateScreen";
import Donate from "./screens/Donate";

//Bill Screens
import LocalBillScreen from "./screens/LocalBillScreen";
import P03 from "./screens/localBillScreens/P03";
import P04 from "./screens/localBillScreens/P04";
import P05 from "./screens/localBillScreens/P05";
import P06 from "./screens/localBillScreens/P06";
import P07 from "./screens/localBillScreens/P07";
import P08 from "./screens/localBillScreens/P08";
import StateBillScreen from "./screens/StateBillScreen";
import SB1035 from "./screens/stateBillScreens/SB1035";
import SB1042 from "./screens/stateBillScreens/SB1042";
import SB1046 from "./screens/stateBillScreens/SB1046";
import SB1339 from "./screens/stateBillScreens/SB1339";
import SB1347 from "./screens/stateBillScreens/SB1347";
import SB1511 from "./screens/stateBillScreens/SB1511";

//import candidate screens
import CharlieCrist from "./screens/candidatesScreen/CharlieCrist";
import HerschelWalker from "./screens/candidatesScreen/HerschelWalker";
import KariLake from "./screens/candidatesScreen/KariLake";
import KatieHobbs from "./screens/candidatesScreen/KatieHobbs";
import RaphaelWarnock from "./screens/candidatesScreen/RaphaelWarnock";
import RonDeSantis from "./screens/candidatesScreen/RonDeSantis";

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
        name="HomeScreen"
        component={HomeScreen}
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
        <Stack.Screen name="CharlieCrist" component={CharlieCrist} />
        <Stack.Screen name="HerschelWalker" component={HerschelWalker} />
        <Stack.Screen name="KariLake" component={KariLake} />
        <Stack.Screen name="KatieHobbs" component={KatieHobbs} />
        <Stack.Screen name="RaphaelWarnock" component={RaphaelWarnock} />
        <Stack.Screen name="RonDeSantis" component={RonDeSantis} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Privacy" component={Privacy} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="LocalBillScreen" component={LocalBillScreen} />
        <Stack.Screen name="StateBillScreen" component={StateBillScreen} />
        <Stack.Screen name="SB1035" component={SB1035} />
        <Stack.Screen name="SB1042" component={SB1042} />
        <Stack.Screen name="SB1046" component={SB1046} />
        <Stack.Screen name="SB1339" component={SB1339} />
        <Stack.Screen name="SB1347" component={SB1347} />
        <Stack.Screen name="SB1511" component={SB1511} />
        <Stack.Screen name="P03" component={P03} />
        <Stack.Screen name="P04" component={P04} />
        <Stack.Screen name="P05" component={P05} />
        <Stack.Screen name="P06" component={P06} />
        <Stack.Screen name="P07" component={P07} />
        <Stack.Screen name="P08" component={P08} />
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
