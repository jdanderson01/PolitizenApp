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

//initiaize variable to hold the local bill data array

const localBillData = [
  {
    key: 1,
    image: require("../assets/maricopa-flag.png"),
    title: "P-03",
    component: "P03",
  },
  {
    key: 2,
    image: require("../assets/maricopa-flag.png"),
    title: "P-04",
    component: "P04",
  },
  {
    key: 3,
    image: require("../assets/maricopa-flag.png"),
    title: "P-05",
    component: "P05",
  },
  {
    key: 4,
    image: require("../assets/maricopa-flag.png"),
    title: "P-06",
    component: "P06",
  },
  {
    key: 5,
    image: require("../assets/maricopa-flag.png"),
    title: "P-07",
    component: "P07",
  },
  {
    key: 6,
    image: require("../assets/maricopa-flag.png"),
    title: "P-08",
    component: "P08",
  },
];

export default function LocalBillScreen() {
  const navigation = useNavigation();
  const handlePress = (component) => {
    navigation.navigate(component);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopNav style={styles.topNav} />
      <FlatList
        numColumns={2}
        data={localBillData}
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
