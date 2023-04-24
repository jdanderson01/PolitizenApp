import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import TopNav from "../components/Header";
import { useNavigation } from "@react-navigation/native";

export default function DonateScreen() {
  const navigation = useNavigation();
  const handlePress = (component) => {
    navigation.navigate(component);
  };

  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <TopNav style={styles.topNav} />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.header}>Donate</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            onChangeText={setCardNumber}
            value={cardNumber}
            placeholder="Card Number"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={setExpiryDate}
            value={expiryDate}
            placeholder="Expiry Date (MM/YY)"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={setCvv}
            value={cvv}
            placeholder="CVV"
            keyboardType="numeric"
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Donate Now</Text>
          </TouchableOpacity>
        </View>
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
  header: {
    color: "#000",
    textAlign: "center",
    fontSize: 20,
    padding: 10,
  },
  form: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  input: {
    height: 40,
    width: 300,
    marginBottom: 20,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
  },
  button: {
    backgroundColor: "#68848a",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 40,
    fontWeight: "bold",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});
