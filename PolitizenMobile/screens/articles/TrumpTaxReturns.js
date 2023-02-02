import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  Image,
} from "react-native";
import TopNav from "../../components/Header";

export default function TrumpTaxReturns() {
  return (
    <SafeAreaView style={styles.container}>
      <TopNav />
      <ScrollView style={styles.scrollView}>
        <Image
          style={styles.homeImg}
          source={require("../../assets/trump-tax-returns.jpeg")}
        />
        <Text style={styles.title}>Voters Keep Abortion</Text>
        <Text style={styles.articleText} t>
          In every state that had abortion rights and reproductive rights on the
          ballot, voters opted to keep them. States such as California had the
          right to an abortion placed into their State Constitution. According
          to CNN, Michigan surpassed its 2018 turnount in an effort to enshrine
          abortion rights into the State's constitution. Kentucky, Montana, and
          Vermont are also states that voted against further abortion
          restrictions.
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
