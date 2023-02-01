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

const articleData = [
  {
    key: 1,
    image: require("../assets/dems-win-nevada.jpeg"),
    title: "Dems Win NV",
    component: "DemsWinNV",
  },
  {
    key: 2,
    image: require("../assets/katie-hobbs-wins-az.jpeg"),
    title: "Hobbs beats Lake",
    component: "HobbsBeatsLake",
  },
  {
    key: 3,
    image: require("../assets/voters-abortion.jpeg"),
    title: "Voters Keep Abortion",
    component: "VotersKeepAbortion",
  },
  {
    key: 4,
    image: require("../assets/walker-speech.jpeg"),
    title: "Walkers' Trans Speech",
    component: "WalkerSpeech",
  },
  {
    key: 5,
    image: require("../assets/desantis-2024-plans.jpeg"),
    title: "DeSantis' 2024 Plans",
    component: "DeSantis2024",
  },
  {
    key: 6,
    image: require("../assets/trump-tax-returns.jpeg"),
    title: "Trump's Tax Returns",
    component: "TrumpTaxReturns",
  },
];

export default function ArticleScreen() {
  const navigation = useNavigation();
  const handlePress = (component) => {
    navigation.navigate(component);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopNav style={styles.topNav} />
      <FlatList
        numColumns={2}
        data={articleData}
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
