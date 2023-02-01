import React from "react";
<<<<<<< HEAD
import { SafeAreaView, StyleSheet, ScrollView, Text, Button } from "react-native";
=======
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
>>>>>>> db28a4546d2e9416ed679e09019047eb652fe8af

export default function BillScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
<<<<<<< HEAD
      <Button
        title="Local Legislation"
        onPress={() => {
          props.navigation.navigate("Local");
        }}
      />
      <Button
        title="State Legislation"
        onPress={() => {
          props.navigation.navigate("State");
        }}
      />
=======
      <ScrollView style={styles.scrollVIew}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Local Legislation</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonTwo}>
          <Text style={styles.buttonText}>State Legislation</Text>
        </TouchableOpacity>
      </ScrollView>
>>>>>>> db28a4546d2e9416ed679e09019047eb652fe8af
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

  button: {
    backgroundColor: "#62787f",
    height: 40,
    width: 250,
    borderWidth: 1,
    padding: 10,
    marginTop: 130,
  },

  buttonTwo: {
    backgroundColor: "#62787f",
    height: 40,
    width: 250,
    borderWidth: 1,
    padding: 10,
    marginTop: 40,
  },

  buttonText: {
    color: "#fff",
  },
});
