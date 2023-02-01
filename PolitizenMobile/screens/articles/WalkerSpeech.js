import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  Image,
} from "react-native";
import TopNav from "../../components/Header";

export default function VotersKeepAbortion() {
  return (
    <SafeAreaView style={styles.container}>
      <TopNav />
      <ScrollView style={styles.scrollVIew}>
        <Image
          style={styles.homeImg}
          source={require("../../assets/walker-speech.jpeg")}
        />
        <Text style={styles.title}>Walkers' Trans Speech</Text>
        <Text style={styles.articleText} t>
          Herschel Walker gave a speech Sunday in Carrollton, TX that many have
          interpreted as transphobic. In an audio transcript from Jezebel,
          Walker insinuates that men and women shouldn't be in the same sports
          because his "great book" says so. He also sounded off on the military,
          saying: "They have talked about bringing pronouns into our military.
          Pronouns. What the heck is a pronoun?"
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
