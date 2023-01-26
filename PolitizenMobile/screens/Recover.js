import "react-native-gesture-handler";
import React, { useState } from "react";
import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import { Text } from "react-native-elements";

export default function Recover(props) {
  const [email, setEmail] = useState(props.route.params.email);

  return (
    <SafeAreaView style={styles.container}>
      <Text h2>Recover Password</Text>
      <TextInput
        style={styles.pInput}
        placeholder="Enter email"
        onChangeText={setEmail}
        value={email}
        underlineColorAndroid="transparent"
      />
      <Pressable
        style={styles.subButton}
        title="Submit"
        onPress={() => {
          props.navigation.navigate("Code");
        }}
      >
        <Text style={styles.pText}>Send</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dde4e5",
    alignItems: "center",
    justifyContent: "center",
  },

  tinyLogo: {
    height: 370,
    width: 371,
  },

  input: {
    height: 40,
    margin: 12,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 12,
    padding: 10,
  },

  pInput: {
    height: 40,
    width: 371,
    margin: 12,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
  },

  subButton: {
    backgroundColor: "#fff",
    height: 65,
    width: 200,
    borderWidth: 1,
    borderRadius: 13,
    padding: 10,
    margin: 10,
  },

  pText: {
    color: "#000",
    textAlign: "center",
    fontSize: 20,
    padding: 10,
  },

  regText: {
    margin: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  pressStyle: {
    textDecorationLine: "underline",
  },
});
