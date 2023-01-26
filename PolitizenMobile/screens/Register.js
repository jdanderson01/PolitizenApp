import "react-native-gesture-handler";
import React, { useState } from "react";
import { SafeAreaView, TextInput, StyleSheet, Pressable } from "react-native";
import { Text } from "react-native-elements";

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Text h2 style={{ textAlign: "left" }}>
        Create an Account
      </Text>
      <TextInput
        style={styles.pInput}
        placeholder="Enter your username"
        value={username}
        onChangeText={setUsername}
        underlineColorAndroid="transparent"
      />
      <TextInput
        style={styles.pInput}
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.pInput}
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Pressable
        style={styles.button}
        title="Submit"
        onPress={() => {
          checkAuth();
        }}
      >
        <Text style={styles.pText}>Continue</Text>
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

  pInput: {
    height: 40,
    width: 371,
    margin: 12,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 12,
    padding: 10,
  },

  button: {
    backgroundColor: "#62787f",
    height: 45,
    width: 371,
    borderWidth: 1,
    borderRadius: 9,
    padding: 10,
    margin: 10,
  },

  pText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
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
