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
          placeholder="Enter State ex. FL"
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
    alignItems: "center",
  },

  title: {
    marginTop: 2,
    alignSelf: "center",
  },

  tinyLogo: {
    height: 110,
    width: 111,
  },
  title: {
    marginTop: 2,
    alignSelf: "center",
  },

  subtitle: {
    marginTop: 2,
    alignSelf: "center",
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
});
