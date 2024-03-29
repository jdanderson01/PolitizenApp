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
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  const handlePress = (component) => {
    navigation.navigate(component);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopNav />
      <ScrollView style={styles.scrollView}>
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
          <TouchableOpacity
            style={styles.greyRectangleOne}
            onPress={() => handlePress("HobbsBeatsLake")}
          >
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
          <TouchableOpacity
            style={styles.greyRectangleTwo}
            onPress={() => handlePress("VotersKeepAbortion")}
          >
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
    justifyContent: "center",
    paddingHorizontal: 10,
    marginTop: 10,
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
    marginTop: 10,
  },

  greyRectangleOne: {
    width: 250,
    height: 95,
    borderRadius: 2,
    alignSelf: "flex-start",
    alignContent: "center",
    marginTop: 15,
    backgroundColor: "#cccccc",
  },

  greyRectangleTwo: {
    width: 250,
    height: 95,
    borderRadius: 2,
    marginTop: 10,
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
