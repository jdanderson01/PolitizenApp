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

export default function RonDeSantis() {
  return (
    <SafeAreaView style={styles.container}>
      <TopNav />
      <ScrollView style={styles.scrollVIew}>
        <Image
          style={styles.homeImg}
          source={require("../../assets/candidates/RonaldDeSantis.jpg")}
        />
        <Text style={styles.articleText}>
          Ronald DeSantis (R) is the current Governor of Florida. He was born in
          Jacksonville, FL. For re-election in the 2022 mid-terms, he ran on
          fighting Big Tech, election integrity, and preserving Florida's
          environment.
        </Text>

        <Text style={styles.rectText}>
          DeSantis signed a "Big Tech Bill" (SB 7072) that gives Floridians the
          right to sue "Big Tech" platforms that have treated them unfairly and
          win monetary damages.
        </Text>

        <Text style={styles.rectText}>
          DeSantis has also been an advocate for election security during his
          term, signing SB 524 into law. The bill aims to strengthen election
          security measures using methods such as stronger ID requirements.
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

  rectText: {
    padding: 5,
    margin: 5,
    fontSize: 15,
  },
});
