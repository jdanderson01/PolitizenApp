import "react-native-gesture-handler";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Pressable, TextInput } from "react-native";
import { Text } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

//regular expression to ensure an email is in the input field
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

//regular expression for the username input
const usernameRegex = /^[a-zA-Z0-9]+$/;

//regular expression for the password input
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const accountValidation = () => {
    if (
      emailRegex.test(email) &&
      usernameRegex.test(username) &&
      passwordRegex.test(password)
    ) {
      navigation.navigate("TabNavigator");
    } else {
      console.log("Form is invalid");
    }
  };

  const navigation = useNavigation();

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
        placeholder="Enter Email Here"
        value={email}
        onChangeText={setEmail}
        keyboardType={"email-address"}
        autoCorrect={false}
        underlineColorAndroid="transparent"
      />
      <TextInput
        style={styles.pInput}
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        underlineColorAndroid="transparent"
      />
      <Pressable
        style={styles.button}
        title="Submit"
        onPress={() => {
          accountValidation();
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
    width: 300,
    margin: 12,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 12,
    padding: 10,
  },

  button: {
    backgroundColor: "#62787f",
    height: 45,
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
