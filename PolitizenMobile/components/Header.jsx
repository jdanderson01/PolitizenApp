import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Header, Image } from "react-native-elements";
import { Ionicons } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function TopNav(props) {
  return (
    <Header
      containerStyle={{
        backgroundColor: "#d5d5d5",
        height: 60,
      }}
      leftComponent={
        <Ionicons
          style={styles.person}
          name="wallet-outline"
          size={35}
          color={"black"}
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
          style={styles.person}
          name="person-outline"
          size={35}
          color={"black"}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  headLogo: {
    height: 109,
    width: 150,
    marginBottom: 15,
  },

  button: {
    alignItems: "center",
    backgroundColor: "#62787f",
    padding: 10,
  },

  person: {
    marginTop: 34,
    color: "black",
  },
});
