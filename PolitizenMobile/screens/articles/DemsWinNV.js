import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  Image,
} from "react-native";
import TopNav from "../../components/Header";

export default function DemsWinNV() {
  return (
    <SafeAreaView style={styles.container}>
      <TopNav />
      <ScrollView style={styles.scrollVIew}>
        <Image
          style={styles.homeImg}
          source={require("../../assets/dems-win-nevada.jpeg")}
        />
        <Text style={styles.title}>Dems Win In Nevada</Text>
        <Text style={styles.articleText}>
          The Democratic Party looks to be poised for a win in the battleground
          state of Nevada after the promised "red wave" failed to show during
          the midterms. Cortez Masto (pictured left) beat Republican opponent
          Adam Laxalt to win a Senate seat in Nevada.{"\n"}
          {"\n"}
          Despite the win, Republican candidate Joe Lombardo won the Governor
          race in Nevada.
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
