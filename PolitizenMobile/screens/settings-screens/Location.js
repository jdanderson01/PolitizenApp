import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import SwitchWithIcons from "react-native-switch-with-icons";

export default function Location() {
  const [location, setLocation] = useState("");

  return (
    <View style={styles.container}>
      <Text>Enter Location Below</Text>
      <View style={styles.bubble}>
        <TextInput
          style={styles.input}
          placeholder="Enter location"
          onChangeText={setLocation}
          value={location}
          underlineColorAndroid="transparent"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dde4e5",
    alignItems: "center",
    justifyContent: "center",
  },

  bubble: {
    alignItems: "center",
    height: 40,
    width: 300,
    margin: 12,
    marginTop: 35,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 12,
    padding: 10,
    flexDirection: "row",
  },
});
