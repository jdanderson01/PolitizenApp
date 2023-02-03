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

export default function RaphaelWarnock() {
  return (
    <SafeAreaView style={styles.container}>
      <TopNav />
      <ScrollView style={styles.scrollVIew}>
        <Image
          style={styles.homeImg}
          source={require("../../assets/candidates/RaphaelWarnock.jpg")}
        />
        <Text style={styles.articleText}>
          Raphael Warnock (D) is a candidate for Georgia Senate. He was born in
          Waycross, GA. During his time as Senator, he supported legislation
          such as the Housing Market Transparency Act of 2022 and the Rent
          Relief Act of 2022.
        </Text>

        <Text style={styles.rectText}>
          Warnock supports the Relief for Small Farmers Act, a bill that's
          proposed to give federal debt forgiveness to farmers in Georgia. He
          also supports the Reforestation Act to help landowners after disaster.
        </Text>

        <Text style={styles.rectText}>
          Warnock is against the Supreme Court's Roe v Wade Ruling and believes
          abortion to be a right.
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
