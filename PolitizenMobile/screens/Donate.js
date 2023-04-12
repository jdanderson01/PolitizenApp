import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  Text,
} from "react-native";
import TopNav from "../components/Header";
import { useNavigation } from "@react-navigation/native";

export default function DonateScreen() {
  const navigation = useNavigation();
  const handlePress = (component) => {
    navigation.navigate(component);
  };

  const [number, onChangeNumber] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <TopNav style={styles.topNav} />
      <ScrollView style={styles.scrollVIew}>
        <Text style={styles.pText}>Donate</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Donation here"
          keyboardType="numeric"
        />
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

  input: {
    height: 40,
    width: 300,
    marginTop: 90,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
  },

  pText: {
    color: "#000",
    textAlign: "center",
    fontSize: 20,
    padding: 10,
  },

  scrollView: {
    width: "100%",
  },
});
