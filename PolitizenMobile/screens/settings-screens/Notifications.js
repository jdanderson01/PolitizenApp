import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import SwitchWithIcons from "react-native-switch-with-icons";
import TopNav from "../../components/Header";
import { useNavigation } from "@react-navigation/native";

export default function Notifications() {
  const [notifications, setNotifications] = useState(false);

  const navigation = useNavigation();
  const handlePress = (component) => {
    navigation.navigate(component);
  };

  return (
    <View style={styles.container}>
      <TopNav style={styles.topNav} />
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
