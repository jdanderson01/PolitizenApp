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

export default function Login(props) {
  //username and password states
  const [username, setUsername] = useState(props.route.params.username);
  const [password, setPassword] = useState("");

  //function to check if the correct username & password were put in.
  function checkAuth(username, password) {
    if (username == "UCF" && password == "Student") {
      props.navigation.navigate("TabNavigator");
    } else {
      console.log("wrong email or password");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image
          style={styles.tinyLogo}
          source={require(".././assets/politizen-logo.png")}
        />
        <Text>Sign In</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter email"
          onChangeText={setUsername}
          value={username}
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={styles.pInput}
          placeholder="Enter Password"
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <Pressable
          style={styles.button}
          title="Submit"
          onPress={() => {
            checkAuth(username, password);
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
            <Text style={styles.pressStyle}>Create one.</Text>
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
