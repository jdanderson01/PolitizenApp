import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  Image,
} from "react-native";
import TopNav from "../../components/Header";

export default function SB1035() {
  return (
    <SafeAreaView style={styles.container}>
      <TopNav />
      <ScrollView style={styles.scrollVIew}>
        <Image
          style={styles.homeImg}
          source={require("../../assets/arizona-flag.png")}
        />
        <Text style={styles.title}>SB-1035</Text>
        <Text style={styles.articleText}>
          An amendment to an act relating to misdemeanor domestic violence
          offenders. The specific section amended was 13-3601.01 and relatest o
          treatment programs for domestic violence offenders. The bill was first
          introduced by Senator Ward (R) in 2015.
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
