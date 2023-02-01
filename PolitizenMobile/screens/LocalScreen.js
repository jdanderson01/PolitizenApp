import React from "react";
import { SafeAreaView, StyleSheet, ScrollView, Text, Button } from "react-native";

export default function LocalScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Local Legislation</Text>
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