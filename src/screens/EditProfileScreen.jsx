import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function EditProfileScreen({ navigation }) {
  const [name, setName] = useState("Mishti");
  const [email, setEmail] = useState("mishti@example.com");
  const [bio, setBio] = useState("Student • Software Developer • Calgary");

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Edit Profile</Text>

      {/* Profile Image */}
      <Image
        source={require("../assets/images/profile.png")} 
        style={styles.profileImage}
      />

      {/* Form */}
      <Text style={styles.label}>Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <Text style={styles.label}>Bio</Text>
      <TextInput
        value={bio}
        onChangeText={setBio}
        style={[styles.input, { height: 100 }]}
        multiline
      />

      {/* Save Button */}
      <TouchableOpacity
        style={styles.saveBtn}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.saveText}>Save Changes</Text>
      </TouchableOpacity>
    </ScrollView>
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
    marginBottom: 25,
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#CFCFCF",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 20,
  },
  saveBtn: {
    backgroundColor: "#2E6FF2",
    paddingVertical: 15,
    borderRadius: 12,
    marginTop: 10,
    marginBottom: 40,
  },
  saveText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
  },
});
