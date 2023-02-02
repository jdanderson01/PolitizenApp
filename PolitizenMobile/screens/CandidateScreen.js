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

export default function CandidateScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <TopNav />
      <ScrollView style={styles.scrollVIew}>
        <View>
          <Image style={styles.candidateImg} source={require("../assets/candidates/CharlieCrist.jpg")}></Image>
          <Text>Charlie Crist</Text>
          <Image style={styles.candidateImg} source={require("../assets/candidates/KariLake.jpg")}></Image>
          <Text>Kari Lake</Text>
          <Image style={styles.candidateImg} source={require("../assets/candidates/KatieHobbs.jpeg")}></Image>
          <Text>Katie Hobbs</Text>
          <Image style={styles.candidateImg} source={require("../assets/candidates/RaphaelWarnock.jpg")}></Image>
          <Text>Raphael Warnock</Text>
          <Image style={styles.candidateImg} source={require("../assets/candidates/HerschelWalker.jpg")}></Image>
          <Text>Herschel Walker</Text>
          <Image style={styles.candidateImg} source={require("../assets/candidates/RonaldDeSantis.jpg")}></Image>
          <Text>RonaldDe Santis</Text>
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

  candidateImg: {
    marginTop: 50,
    maxHeight: 250,
    maxWidth: 250,
    minWidth: 50,
    minHeight: 50,
  },


  scrollView: {
    width: "100%",
  },
});
