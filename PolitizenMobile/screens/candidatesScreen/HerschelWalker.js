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

export default function HerschelWalker() {
  return (
    <SafeAreaView style={styles.container}>
      <TopNav />
      <ScrollView style={styles.scrollVIew}>
        <Image
          style={styles.homeImg}
          source={require("../../assets/candidates/HerschelWalker.jpg")}
        />
        <Text style={styles.articleText}>
          Herschel Walker (R) is a candidate for Georgia's Senate seat. Born in
          Georgia, his platform includes but isn't limited to: bringing jobs to
          Georgia, energy independence, and defending the police.
        </Text>
        <Text style={styles.rectText}>
          Walker is a proponent of free-market capitalism and promises to bring
          more of it to Georgia in an effort to help small businesses thrive
          free from government regulation.
        </Text>
        <Text style={styles.rectText}>
          Walker supports a stronger southern border policy to combat drugs,
          weapons, and other items that're reportedly being brought in through
          the border.
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
    marginTop: 10,
    marginBottom: 10,
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

  greyRectangle: {
    alignSelf: "flex-start",
    height: 95,
    marginTop: 10,
    alignSelf: "center",
    alignContent: "center",
    backgroundColor: "#cccccc",
  },

  rectText: {
    padding: 5,
    margin: 5,
    fontSize: 15,
  },
});
