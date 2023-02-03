import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  Image,
} from "react-native";
import TopNav from "../../components/Header";

export default function SB1046() {
  return (
    <SafeAreaView style={styles.container}>
      <TopNav />
      <ScrollView style={styles.scrollVIew}>
        <Image
          style={styles.homeImg}
          source={require("../../assets/arizona-flag.png")}
        />
        <Text style={styles.title}>SB-1046</Text>
        <Text style={styles.articleText}>
          A bill first introduced in 2021 by Senator Wendy Rogers (R), SB 1046
          relates to dividing interscholastic, intercollegiate, intramural, or
          club athletic teams by biological sex. Athletes that dispute their sex
          must prove their stated sex by giving a Physician's signed statement
          that indicates sex based on: internal or external reproductive
          anatomy, endogenously produced testosterone levels, or an analysis of
          their genetic makeup.
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
