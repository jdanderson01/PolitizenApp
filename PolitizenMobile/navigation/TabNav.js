import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import BillScreen from "../screens/BillScreen";
import ArticleScreen from "../screens/ArticleScreen";
import CandidateScreen from "../screens/CandidateScreen";

const Tab = createBottomTabNavigator();

export default function TabNav() {
  <Tab.Navigator initialRouteName="HomeScreen">
    <Tab.Screen name="HomeScreen" component={HomeScreen} />
    <Tab.Screen name="Bill" component={BillScreen} />
    <Tab.Screen name="Candidate" component={CandidateScreen} />
    <Tab.Screen name="Article" component={ArticleScreen} />
  </Tab.Navigator>;
}
