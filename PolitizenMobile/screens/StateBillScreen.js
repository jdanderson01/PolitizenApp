import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import TopNav from "../components/Header";
import { useNavigation } from "@react-navigation/native";

//initialize variable to hold the state bill data array
const stateBillData = [
  {
    key: 1,
    image: require("../assets/arizona-flag.png"),
    title: "SB-1035",
    component: "SB1035",
  },
  {
    key: 2,
    image: require("../assets/arizona-flag.png"),
    title: "SB-1046",
    component: "SB1046",
  },
  {
    key: 3,
    image: require("../assets/arizona-flag.png"),
    title: "SB-1347",
    component: "SB1347",
  },
  {
    key: 4,
    image: require("../assets/arizona-flag.png"),
    title: "SB1339",
    component: "SB1339",
  },
  {
    key: 5,
    image: require("../assets/arizona-flag.png"),
    title: "SB-1511",
    component: "SB1411",
  },
  {
    key: 6,
    image: require("../assets/arizona-flag.png"),
    title: "SB-1042",
    component: "SB1042",
  },
];

export default function StateBillScreen() {
  const navigation = useNavigation();
  const handlePress = (component) => {
    navigation.navigate(component);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopNav style={styles.topNav} />
      <FlatList
        numColumns={2}
        data={stateBillData}
        renderItem={({ item }) => (
          <View style={styles.imgContainer}>
            <TouchableOpacity onPress={() => handlePress(item.component)}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dde4e5",
    alignItems: "center",
  },

  imageContainer: {
    flex: 1,
    alignItems: "center",
    margin: 10,
  },

  image: {
    height: 140,
    width: 150,
    margin: 20,
  },

  title: {
    marginTop: 2,
    alignSelf: "center",
  },

  tinyLogo: {
    height: 110,
    width: 111,
  },
});
