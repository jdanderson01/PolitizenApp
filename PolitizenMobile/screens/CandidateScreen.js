import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import TopNav from "../components/Header";
import { useNavigation } from "@react-navigation/native";

//initialize variable to hold an array that stores candidate data
const candidateData = [
  {
    key: 1,
    image: require("../assets/candidates/CharlieCrist.jpg"),
    title: "Charlie Crist",
    component: "CharlieCrist",
  },
  {
    key: 2,
    image: require("../assets/candidates/HerschelWalker.jpg"),
    title: "Herschel Walker",
    component: "HerschelWalker",
  },
  {
    key: 3,
    image: require("../assets/candidates/KatieHobbs.jpeg"),
    title: "Katie Hobbs",
    component: "KatieHobbs",
  },
  {
    key: 4,
    image: require("../assets/candidates/RaphaelWarnock.jpg"),
    title: "Raphael Warnock",
    component: "RaphaelWarnock",
  },
  {
    key: 5,
    image: require("../assets/candidates/RonaldDeSantis.jpg"),
    title: "Ronald DeSantis",
    component: "RonDeSantis",
  },
  {
    key: 6,
    image: require("../assets/candidates/KariLake.jpg"),
    title: "Kari Lake",
    component: "KariLake",
  },
];

export default function CandidateScreen() {
  //calling usenavigation and putting it in a function to use within the flatlist. component is passed as its a property of the array.
  const navigation = useNavigation();
  const handlePress = (component) => {
    navigation.navigate(component);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopNav style={styles.topNav} />
      <FlatList
        numColumns={2}
        data={candidateData}
        renderItem={({ item }) => (
          <View style={styles.imgContainer}>
            <TouchableOpacity onPress={() => handlePress(item.component)}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dde4e5",
    alignItems: "center",
  },

  imageContainer: {
    flex: 1,
    alignItems: "center",
    margin: 10,
  },

  image: {
    height: 140,
    width: 140,
    margin: 20,
  },

  title: {
    marginTop: 2,
    alignSelf: "center",
  },

  tinyLogo: {
    height: 110,
    width: 111,
  },
});
