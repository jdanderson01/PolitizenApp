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

export default function KatieHobbs() {
  return (
    <SafeAreaView style={styles.container}>
      <TopNav />
      <ScrollView style={styles.scrollVIew}>
        <Image
          style={styles.homeImg}
          source={require("../../assets/candidates/KatieHobbs.jpeg")}
        />
        <Text style={styles.articleText}>
          Katie Hobbs (D) is the current Governor of Arizona. She was born and
          raised in the State of Arizona. Hobbs ran on a platform that included,
          but isn't limited to: economy and jobs, reproductive rights and
          climate.
        </Text>

        <Text style={styles.rectText}>
          Hobbs supports The American Rescue Plan that was passed by Congress
          and signed into law by President Joe Biden. Hobbs is also campaigning
          for a state-level Child Tax Credit in Arizona.
        </Text>

        <Text style={styles.rectText}>
          Katie Hobbs has promised to use her veto power to stop any bans on
          reproductive rights in the State of Arizona. She claims that, "the
          decision to have a child should rest solely between a woman and her
          doctor, nott he government or politicians."
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
