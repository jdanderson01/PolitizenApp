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
        <Text style={styles.title}>Trump's Tax Returns</Text>
        <Text style={styles.articleText} t>
          Former President Trump's Tax Returns, documents that have long been
          shrouded in mystery and speculation, have finally been revealed to the
          public. Many auditors and experts have questions in regards to Trump's
          reporting of his finances, speculating that losses may have been
          exaggerated to lower his tax burden or to dodge it entirely.
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
