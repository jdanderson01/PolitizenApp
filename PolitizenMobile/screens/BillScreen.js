import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import TopNav from "../components/Header";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

//legiscan key
const API_KEY = "18c3b84f2e7b6ea9b7f13332187403e5";

export default function StateBillScreen() {
  const navigation = useNavigation();

  const [address, setAddress] = useState("");
  const [bill, setBill] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAddressChange = (text) => {
    setAddress(text);
  };

  const handleSearch = () => {
    const url = `https://api.legiscan.com/?key=${API_KEY}&op=getMasterList&state=${encodeURIComponent(
      address
    )}`;

    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        const masterlist = response.data.masterlist;
        setBill(Object.values(masterlist));
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handlePress = (billData) => {
    navigation.navigate("BillDetailScreen", { billData });
  };

  const renderBillItem = ({ item }) => (
    <TouchableOpacity style={styles.billItem} onPress={() => handlePress(item)}>
      <Text style={styles.title}>Bill ID: {item.bill_id}</Text>
      <Text style={styles.title}>Title: {item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <TopNav />
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Enter your state Abbreviation"
          value={address}
          onChangeText={handleAddressChange}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
      {loading ? (
        <Text>Loading ....</Text>
      ) : (
        <FlatList
          data={bill}
          renderItem={renderBillItem}
          keyExtractor={(item) => item.bill_id}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dde4e5",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    fontSize: 16,
  },

  toggleButtons: {
    flexDirection: "row",
    marginRight: 10,
  },
  activeButton: {
    backgroundColor: "#007AFF",
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  inactiveButton: {
    backgroundColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },

  searchButton: {
    padding: 10,
    backgroundColor: "#68848a",
    borderRadius: 10,
  },
  searchButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  billItem: {
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
