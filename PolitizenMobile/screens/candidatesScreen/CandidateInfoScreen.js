import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import axios from "axios";
import TopNav from "../../components/Header";

//image of the US flag if candidate photoURL link
const fallbackImage =
  "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png";

export default function CandidateInfoScreen({ route }) {
  const { candidate } = route.params;
  const [office, setOffice] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/civicinfo/v2/representatives/${candidate.divisionId}?levels=administrativeArea1&roles=legislatorUpperBody&key=AIzaSyDDjegeqZJYLSkRgDCjGJppSheZ2QPkoLQ`
      )
      .then((response) => {
        const official = response.data.officials.find(
          (official) => official.name === candidate.name
        );
        setOffice(official?.office?.name || "");
      })
      .catch((error) => console.error(error));
  }, [candidate]);

  return (
    <View style={styles.container}>
      <TopNav />
      <View style={styles.content}>
        <Image
          source={{ uri: candidate.photoUrl || fallbackImage }}
          style={styles.image}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{candidate.name}</Text>
          <Text style={styles.party}>{candidate.party}</Text>
          <Text style={styles.office}>{office}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dde4e5",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  infoContainer: {
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  party: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "black",
  },
  office: {
    fontSize: 18,
    color: "#666",
  },
});
