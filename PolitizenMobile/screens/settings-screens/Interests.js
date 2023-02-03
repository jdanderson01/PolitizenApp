import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Interests() {
  const [selected, setSelected] = useState(0);
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.text}>Climate</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dde4e5",
    alignContent: "center",
  },

  button: {
    alignSelf: "flex-start",
    color: "#fff",
  },

  text: {
    alignSelf: "center",
  },
});
