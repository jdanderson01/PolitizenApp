import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import SwitchWithIcons from "react-native-switch-with-icons";

export default function Notifications() {
  const [notifications, setNotifications] = useState(false);

  return (
    <View style={styles.container}>
      <Text>Notification Settings</Text>
      <View style={styles.bubble}>
        <Text>Toggle Push Notifications</Text>
        <SwitchWithIcons
          style={styles.toggle}
          value={notifications}
          onValueChange={setNotifications}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dde4e5",
    alignItems: "center",
    justifyContent: "center",
  },

  toggle: {
    marginLeft: 20,
  },

  bubble: {
    alignItems: "center",
    height: 40,
    margin: 12,
    marginTop: 35,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 12,
    padding: 10,
    flexDirection: "row",
  },
});
