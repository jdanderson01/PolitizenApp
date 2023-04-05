import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Header, Image } from "react-native-elements";
import { Ionicons } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function TopNav() {
  //store the useNavigation component in a variable so it can be called in the handlePress().
  //component is passed as a prop so you can put the name of a component/file and it'll be navigated to.
  const navigation = useNavigation();
  const handlePress = (component) => {
    navigation.navigate(component);
  };
  return (
    <Header
      containerStyle={{
        width: "100%",
        height: "15%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#d5d5d5",
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
            name="menu-outline"
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
    width: 175,
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
