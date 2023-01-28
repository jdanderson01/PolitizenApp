import React from "react";
import { SafeAreaView, StyleSheet, ScrollView, Text } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollVIew}>
        <Text>Yerrrr</Text>
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
});
