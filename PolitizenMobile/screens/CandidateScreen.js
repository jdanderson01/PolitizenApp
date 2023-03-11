import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import TopNav from "../components/Header";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import CandidateInfoScreen from "../screens/candidatesScreen/CandidateInfoScreen";

const API_KEY = "AIzaSyDDjegeqZJYLSkRgDCjGJppSheZ2QPkoLQ";

export default function CandidateScreen() {
  const [address, setAddress] = useState("");
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const navigation = useNavigation();

  const handleAddressChange = (text) => {
    setAddress(text);
  };

  const handleSearch = () => {
    const url = `https://www.googleapis.com/civicinfo/v2/representatives?key=${API_KEY}&address=${encodeURIComponent(
      address
    )}`;

    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setCandidates(response.data.officials);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handlePress = (candidate) => {
    setSelectedCandidate(candidate);
    navigation.navigate("CandidateInfo", { candidate });
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopNav />
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Enter your address"
          value={address}
          onChangeText={handleAddressChange}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        numColumns={2}
        data={candidates}
        renderItem={({ item }) => (
          <View style={styles.imgContainer}>
            <TouchableOpacity onPress={() => handlePress(item)}>
              <Image
                source={{
                  uri:
                    item.photoUrl ||
                    "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png",
                }}
                style={styles.image}
              />
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.subtitle}>{item.party}</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.ocdId}
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

  searchBar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    marginRight: 10,
    paddingHorizontal: 10,
  },

  searchButton: {
    backgroundColor: "#007bff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
  },

  searchButtonText: {
    color: "#fff",
    fontWeight: "bold",
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

  subtitle: {
    marginTop: 2,
    alignSelf: "center",
  },
});
