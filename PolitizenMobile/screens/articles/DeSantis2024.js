import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  Image,
} from "react-native";
import TopNav from "../../components/Header";

export default function DeSantis2024() {
  return (
    <SafeAreaView style={styles.container}>
      <TopNav />
      <ScrollView style={styles.scrollVIew}>
        <Image
          style={styles.homeImg}
          source={require("../../assets/desantis-2024-plans.jpeg")}
        />
        <Text style={styles.title}>DeSantis' 2024 Plans</Text>
        <Text style={styles.articleText} t>
          There has been speculation that Florida Governor Ron DeSantis may make
          a Presidential Bid in 2024. DeSantis himself has not come out and
          announced his intent to run or made any overtures to such a thing, but
          with his rising popularity and what's perceived as foundation
          building, experts are wondering if he'll make a run at the Republican
          nomination for the 2024 presidency.
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
