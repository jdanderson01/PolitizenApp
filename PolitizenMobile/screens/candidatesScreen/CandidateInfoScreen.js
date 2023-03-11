import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import TopNav from "../../components/Header";

const fallbackImage =
  "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png";

export default function CandidateInfoScreen({ route }) {
  const { candidate } = route.params;
  const [office, setOffice] = useState("");

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/civicinfo/v2/representatives/${candidate.divisionId}?levels=administrativeArea1&roles=legislatorUpperBody&key=YOUR_API_KEY_HERE`
    )
      .then((response) => response.json())
      .then((data) => {
        const official = data.officials.find(
          (official) => official.name === candidate.name
        );
        setOffice(official?.office?.name || "");
      });
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
    backgroundColor: "white",
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
    color: "#666",
  },
  office: {
    fontSize: 18,
    color: "#666",
  },
});
