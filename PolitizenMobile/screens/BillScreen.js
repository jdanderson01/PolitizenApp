import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function BillScreen() {
  const navigation = useNavigation();
  const handlePress = (component) => {
    navigation.navigate(component);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollVIew}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("LocalBillScreen")}
        >
          <Text style={styles.buttonText}>Local Legislation</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonTwo}
          onPress={() => handlePress("StateBillScreen")}
        >
          <Text style={styles.buttonText}>State Legislation</Text>
        </TouchableOpacity>
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
