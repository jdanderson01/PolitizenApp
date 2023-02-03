import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    key: 1,
    title: "Notifications",
    icon: "chevron-forward-outline",
    component: "Notifications",
  },

  {
    key: 2,
    title: "Edit your interests",
    icon: "chevron-forward-outline",
    component: "Interests",
  },

  {
    key: 3,
    title: "Privacy",
    icon: "chevron-forward-outline",
    component: "Privacy",
  },

  {
    key: 4,
    title: "Change Location",
    icon: "chevron-forward-outline",
    component: "Location",
  },
];

export default function SettingsScreen() {
  const navigation = useNavigation();
  const handlePress = (component) => {
    navigation.navigate(component);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      <FlatList
        numRows={4}
        data={data}
        renderItem={({ item }) => (
          <View style={styles.bubble}>
            <TouchableOpacity onPress={() => handlePress(item.component)}>
              <Text style={styles.listText}>{item.title}</Text>
              <Ionicons name={item.icon} style={styles.chevron} size={25} />
            </TouchableOpacity>
          </View>
        )}
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

  header: {
    marginTop: 20,
    alignSelf: "center",
    fontSize: 30,
  },

  listText: {
    fontSize: 15,
    color: "#13131A",
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

  chevron: {
    marginLeft: 300,
    marginTop: -23,
  },
});
