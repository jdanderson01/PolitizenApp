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
            style={styles.image}
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
    height: 70,
    width: 70,
    marginTop: 20,
  },

  greyRectangleOne: {
    width: 209,
    height: 75,
    alignSelf: "center",
    alignContent: "center",
    marginTop: 20,
    backgroundColor: "#cccccc",
  },

  greyRectangleTwo: {
    width: 209,
    height: 75,
    alignSelf: "center",
    alignContent: "center",
    marginTop: 20,
    backgroundColor: "#cccccc",
  },

  rectText: {
    padding: 2,
    fontSize: 11,
  },

  homeImg: {
    marginTop: 50,
    height: 250,
    width: 250,
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