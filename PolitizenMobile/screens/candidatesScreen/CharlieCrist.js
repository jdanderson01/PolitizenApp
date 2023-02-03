import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  View,
} from "react-native";
import TopNav from "../../components/Header";

export default function CharlieCrist() {
  return (
    <SafeAreaView style={styles.container}>
      <TopNav />
      <ScrollView style={styles.scrollVIew}>
        <Image
          style={styles.homeImg}
          source={require("../../assets/candidates/CharlieCrist.jpg")}
        />
        <Text style={styles.articleText}>
          Charlie Crist (D) is a candidte for Florida Governor. Born in Altoona,
          Pennsylvania, Crist ran on protecting reproductive freedoms, clean
          water for Floridians, and voting reform in the state.
        </Text>
        <Text style={styles.rectText}>
          Crist supports a voting reform in Florida, which constitutes
          overturning DeSantis' limits on mail ballots and automatically
          reigstering people to vote if they're seeking a Driver's license or
          doing business with the DMV.
        </Text>
        <Text style={styles.rectText}>
          Crist also promised to sign an executive order, guaranteeing the right
          to access a safe abortion in the state of Florida. He claims that it's
          protected by the Florida state constitution.
        </Text>
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

  homeImg: {
    marginTop: 30,
    height: 356,
    width: 353,
    alignSelf: "center",
  },

  title: {
    marginTop: 20,
    fontSize: 35,
    alignSelf: "center",
    color: "#13131A",
  },

  articleText: {
    padding: 5,
    margin: 5,
    fontSize: 15,
    color: "#13131A",
  },
});
