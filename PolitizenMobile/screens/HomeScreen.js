import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import TopNav from "../components/Header";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <TopNav />
      <ScrollView style={styles.scrollVIew}>
        <Image
          style={styles.homeImg}
          source={require("../assets/dems-win-nevada.jpeg")}
        />
        <Text style={styles.pText}>Dems Win In Nevada</Text>
        <View style={styles.articleContainer}>
          <Image
            source={require("../assets/katie-hobbs-wins-az.jpeg")}
            style={styles.image}
          />
          <TouchableOpacity style={styles.greyRectangleOne}>
            <Text style={styles.rectText}>
              Katie Hobbs wins the Arizona governor seat for Democrats, a
              much-needed win in a historically Republican state. Doubts about
              theelection have already been cast by her opponent.
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.articleContainer}>
          <Image
            source={require("../assets/voters-abortion.jpeg")}
            style={styles.image2}
          />
          <TouchableOpacity style={styles.greyRectangleTwo}>
            <Text style={styles.rectText}>
              States like Michigan, Kentucky, Montana, California, and Vermont
              generally saw voters vote in favor of abortion rights.
            </Text>
          </TouchableOpacity>
        </View>
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

  articleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  headLogo: {
    height: 109,
    width: 110,
  },

  image: {
    height: 95,
    width: 95,
    marginTop: 15,
  },

  image2: {
    height: 95,
    width: 95,
    marginTop: 50,
  },

  greyRectangleOne: {
    width: 250,
    height: 95,
    alignSelf: "center",
    alignContent: "center",
    marginTop: 15,
    backgroundColor: "#cccccc",
  },

  greyRectangleTwo: {
    width: 250,
    height: 95,
    marginTop: 50,
    alignSelf: "center",
    alignContent: "center",
    backgroundColor: "#cccccc",
  },

  rectText: {
    padding: 2,
    fontSize: 11,
  },

  homeImg: {
    marginTop: 30,
    height: 356,
    width: 353,
    alignSelf: "center",
  },

  pText: {
    color: "#000000",
    textAlign: "center",
    fontSize: 30,
    fontStyle: "bold",
    marginTop: 5,
  },

  scrollView: {
    width: "100%",
  },
});
