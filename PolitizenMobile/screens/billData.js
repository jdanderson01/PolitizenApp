import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";

export default function BillDetailScreen({ route }) {
  const { billData } = route.params;
  const [billDetails, setBillDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_KEY = "18c3b84f2e7b6ea9b7f13332187403e5";

  useEffect(() => {
    const url = `https://api.legiscan.com/?key=${API_KEY}&op=getBill&id=${billData.bill_id}`;
    axios
      .get(url)
      .then((response) => {
        setBillDetails(response.data.bill);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [billData]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text>Bill ID: {billData.bill_id}</Text>
      <Text>Title: {billData.title}</Text>
      {billDetails && (
        <View>
          <Text>Description: {billDetails.description}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dde4e5",
    alignItems: "center",
    justifyContent: "center",
  },
});
