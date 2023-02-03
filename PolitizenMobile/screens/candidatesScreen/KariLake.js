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

export default function Karilake() {
  return (
    <SafeAreaView style={styles.container}>
      <TopNav />
      <ScrollView style={styles.scrollVIew}>
        <Image
          style={styles.homeImg}
          source={require("../../assets/candidates/KariLakeTwo.jpeg")}
        />
        <Text style={styles.articleText}>
          Kari Lake (R) is a candidate running for Governor of Arizona. She was
          born in Illinois but worked as a News Anchor in Phoenix for 22 years.
          Her platform includes: water security, being against vaccine mandates,
          and a more stringent border policy.
        </Text>

        <Text style={styles.rectText}>
          Kari Lake advocates for more security at Arizona's border with Mexico
          to curb illegal immigrants and drug trade. This includes "finishing
          Trump's Wall" and establishing a Criminal Illegal Alien database.
        </Text>

        <Text style={styles.rectText}>
          Kari Lake has also promised to end vaccine mandates, opting for
          educating the public and allowing them to make their own decisions.
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
