import React from "react";
import { StyleSheet } from "react-native";
import { Header, Image } from "react-native-elements";
import { Ionicons } from "react-native-vector-icons";

export default function TopNav() {
  return (
    <Header
      containerStyle={{
        backgroundColor: "#d5d5d5",
        height: 100,
        maxWidth: 430,
      }}
      leftComponent={
        <Ionicons
          style={styles.icon}
          name="wallet-outline"
          size={30}
          color="black"
        />
      }
      centerComponent={
        <Image
          style={styles.headLogo}
          source={require("../assets/politizen-logo.png")}
        />
      }
      rightComponent={
        <Ionicons
          style={styles.icon}
          name="person-outline"
          size={30}
          color="black"
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#62787f",
    padding: 10,
  },

  headLogo: {
    height: 150,
    width: 150,
    marginBottom: 40,
  },

  icon: {
    color: "black",
    marginTop: 60,
  },
});
