import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput
} from "react-native";
import TopNav from "../components/Header";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const API_KEY = "18c3b84f2e7b6ea9b7f13332187403e5";

//so I dont have to check the doc again

//getBill template: https://api.legiscan.com/?key=APIKEY&op=getBill&id=BILL_ID

//getBillText template:https://api.legiscan.com/?key=APIKEY&op=getBillText&id=DOC_ID

//getMasterList template: https://api.legiscan.com/?key=APIKEY&op=getMasterList&state=STATE

export default function StateBillScreen() {
  const navigation = useNavigation();
  const handlePress = (component) => {
    navigation.navigate(component);
  };

  const [address, setAddress] = useState("");
  const [bill, setBill] = useState([]);

  const handleAddressChange = (text) => {
    setAddress(text);
  };

  const handleSearch = () => {
    const url = `https://api.legiscan.com/?key=${API_KEY}&op=getMasterList&state=${encodeURIComponent(address)}`;

    //getting invalid state 

    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setBill(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopNav />
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Enter State"
          value={address}
          onChangeText={handleAddressChange}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        numColumns={1}
        data={bill}
        renderItem={({ item }) => (
          <View style={styles.imgContainer}>
            <TouchableOpacity onPress={() => handlePress(item.id)}>
              <Image
                source={{
                  uri:
                    item.photoUrl ||
                    "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png",
                }}
                style={styles.image}
              />
              <Text style={styles.title}>{item}</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
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
    width: 150,
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
