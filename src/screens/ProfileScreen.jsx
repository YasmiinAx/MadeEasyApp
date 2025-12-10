import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Profile</Text>

      {/* Profile Picture */}
      <Image
        source={require("../assets/images/profile.png")}
        style={styles.profileImage}
      />

      {/* Name */}
      <Text style={styles.name}>Mishti</Text>

      {/* Bio */}
      <Text style={styles.bio}>Student • Software Developer • Calgary</Text>

      {/* Edit Profile Button */}
      <TouchableOpacity
        style={styles.editBtn}
        onPress={() => navigation.navigate("EditProfile")}
      >
        <Text style={styles.editText}>Edit Profile</Text>
      </TouchableOpacity>

      {/* Section Title */}
      <Text style={styles.sectionTitle}>Activity</Text>

      {/* Placeholder items */}
      <View style={styles.card}>
        <Text style={styles.cardText}>Recent bookings, orders, etc…</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 20,
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 65,
    alignSelf: "center",
    marginBottom: 15,
  },
  name: {
    fontSize: 26,
    fontWeight: "600",
    textAlign: "center",
  },
  bio: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  editBtn: {
    backgroundColor: "#2E6FF2",
    paddingVertical: 12,
    width: "60%",
    alignSelf: "center",
    borderRadius: 10,
    marginBottom: 25,
  },
  editText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#F5F5F7",
    padding: 20,
    borderRadius: 15,
  },
  cardText: {
    fontSize: 16,
    color: "#333",
  },
});
