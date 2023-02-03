import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  Image,
} from "react-native";
import TopNav from "../../components/Header";

export default function P08() {
  return (
    <SafeAreaView style={styles.container}>
      <TopNav />
      <ScrollView style={styles.scrollVIew}>
        <Image
          style={styles.homeImg}
          source={require("../../assets/maricopa-flag.png")}
        />
        <Text style={styles.title}>P-08</Text>
        <Text style={styles.articleText}>
          Known as the "Reduction of Commuter Use of Motor Vehicles by County
          Employees," the purpose of this ordinance is to reduce commute trips
          to and from work sites for County employees by providing vehicles such
          as vans for vanwooling and parking for said vans. Subsidies are also
          offered for carpooling and vanwooling, including but not limited to:
          payment for fuel, insurance, parking.
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
