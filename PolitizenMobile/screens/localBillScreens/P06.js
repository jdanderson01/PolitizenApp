import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  Image,
} from "react-native";
import TopNav from "../../components/Header";

export default function P06() {
  return (
    <SafeAreaView style={styles.container}>
      <TopNav />
      <ScrollView style={styles.scrollVIew}>
        <Image
          style={styles.homeImg}
          source={require("../../assets/maricopa-flag.png")}
        />
        <Text style={styles.title}>P-06</Text>
        <Text style={styles.articleText}>
          Known as the Regulation of Barking Dogs, this ordinance makes it
          unlawful to have custody or control of a dog that barks excessively.
          Yowls, yips, or any other naturally occurring sound from a dog counts
          as a bark. When a complaint is made, the County Agent will investigate
          and recommend a mediator to resolve any potential disputes.
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
