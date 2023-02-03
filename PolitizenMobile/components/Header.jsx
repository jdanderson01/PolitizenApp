import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Header, Image } from "react-native-elements";
import { Ionicons } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function TopNav() {
  const navigation = useNavigation();
  const handlePress = (component) => {
    navigation.navigate(component);
  };
  return (
    <Header
      containerStyle={{
        backgroundColor: "#d5d5d5",
        height: 100,
        maxWidth: 430,
        paddingTop: 55,
      }}
      leftComponent={
        <TouchableOpacity onPress={() => handlePress("Donate")}>
          <Ionicons
            style={styles.icon}
            name="wallet-outline"
            size={30}
            color="black"
          />
        </TouchableOpacity>
      }
      centerComponent={
        <TouchableOpacity onPress={() => handlePress("HomeScreen")}>
          <Image
            style={styles.headLogo}
            source={require("../assets/politizen-logo.png")}
          />
        </TouchableOpacity>
      }
      rightComponent={
        <TouchableOpacity onPress={() => handlePress("Settings")}>
          <Ionicons
            style={styles.icon2}
            name="person-outline"
            size={30}
            color="black"
          />
        </TouchableOpacity>
      }
    />
  );
}

const styles = StyleSheet.create({
  headLogo: {
    height: 175,
    width: 195,
    marginBottom: 40,
  },

  icon: {
    color: "black",
    paddingTop: 75,
  },

  icon2: {
    color: "black",
    paddingTop: 75,
  },
});
