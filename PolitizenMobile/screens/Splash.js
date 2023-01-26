import { StyleSheet, SafeAreaView, Image, Button } from "react-native";

export default function Splash(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require(".././assets/politizen-logo.png")}
      />
      <Button
        title="Login"
        onPress={() => {
          props.navigation.navigate("Login");
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

  tinyLogo: {
    height: 370,
    width: 371,
  },
});
