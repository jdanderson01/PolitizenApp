import React from "react";
import { SafeAreaView, StyleSheet, ScrollView, Text, Button } from "react-native";

export default function BillScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
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
});
