import React, { useState } from "react";
import { SafeAreaView, TextInput, StyleSheet, Pressable } from "react-native";
import { Text } from "react-native-elements";
import { auth } from "../Firebase";
import { sendPasswordResetEmail } from "firebase/auth";

export default function Recover() {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState("");

  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setEmailSent(true);
        setError("");
      })
      .catch((error) => {
        setEmailSent(false);
        setError(error.message);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text h3 style={styles.title}>
        Reset Password
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        placeholderTextColor="#b2b2b2"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={setEmail}
      />
      <Pressable style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Reset Password</Text>
      </Pressable>
      {error !== "" && <Text style={styles.error}>{error}</Text>}
      {emailSent && (
        <Text style={styles.success}>Password reset email sent to {email}</Text>
      )}
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
  title: {
    marginBottom: 50,
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
  },
  button: {
    backgroundColor: "#62787f",
    height: 65,
    width: 300,
    borderWidth: 1,
    borderRadius: 13,
    padding: 10,
    margin: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    padding: 10,
  },
  error: {
    color: "#b71c1c",
    marginTop: 10,
  },
  success: {
    color: "#388e3c",
    marginTop: 10,
  },
});
