import "react-native-gesture-handler";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import { Text } from "react-native-elements";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";

export default function Login(props) {
  //username and password states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  //function to check if the correct username & password were put in.
  function checkAuth() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Navigate to home screen of app on success
        props.navigation.navigate("TabNavigator");
      })
      .catch((error) => {
        if (error.code === "auth/wrong-password") {
          setPasswordError("You entered the wrong password");
          setEmailError("");
        } else if (error.code === "auth/user-not-found") {
          setEmailError("You entered the wrong email");
          setPasswordError("");
        } else if (error.code === "auth/invalid-email") {
          setEmailError("You entered the wrong email");
          setPasswordError("");
        }
        console.log(error.message);
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image
          style={styles.logo}
          source={require(".././assets/politizen-logo.png")}
        />
        <Text style={styles.signText}>Sign In</Text>
        <TextInput
          style={[styles.input, { borderColor: emailError ? "red" : "#ccc" }]}
          placeholder="Enter E-Mail"
          onChangeText={(text) => {
            setEmail(text);
            setEmailError("");
          }}
          value={email}
          underlineColorAndroid="transparent"
        />
        {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
        <TextInput
          style={[
            styles.pInput,
            { borderColor: passwordError ? "red" : "#ccc" },
          ]}
          placeholder="Enter Password"
          onChangeText={(text) => {
            setPassword(text);
            setPasswordError("");
          }}
          secureTextEntry={true}
        />
        {passwordError ? (
          <Text style={styles.error}>{passwordError}</Text>
        ) : null}
        <Pressable
          style={styles.button}
          title="Submit"
          onPress={() => {
            checkAuth();
          }}
        >
          <Text style={styles.pText}>Sign in</Text>
        </Pressable>
        <Text style={styles.regText}>
          Don't have an account?{" "}
          <Pressable
            onPress={() => {
              props.navigation.navigate("Register");
            }}
          >
            <Text style={styles.pressStyle}>Create one</Text>
          </Pressable>
        </Text>
        <Text style={styles.regText}>
          Forgot Password?{" "}
          <Pressable
            onPress={() => {
              props.navigation.navigate("Recover");
            }}
          >
            <Text style={styles.pressStyle}>Click here.</Text>
          </Pressable>
        </Text>
      </ScrollView>
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

  scrollView: {
    width: "100%",
  },

  logo: {
    height: 370,
    width: 371,
    alignSelf: "center",
  },

  signText: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 20,
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
    alignSelf: "center",
    fontSize: 20,
  },

  regText: {
    margin: 4,
    alignItems: "center",
    justifyContent: "center",
  },

  pressStyle: {
    textDecorationLine: "underline",
  },

  errorInput: {
    borderColor: "red",
  },

  errorMsg: {
    color: "red",
    marginHorizontal: 12,
    marginBottom: 8,
  },
});
