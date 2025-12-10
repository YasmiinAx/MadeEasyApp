import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Switch, StyleSheet } from "react-native";
import { useProfile } from "../components/context/profile-context"; // import the context

export default function ProfileScreen({ navigation }) {
  const { profile } = useProfile(); 
  const [pushEnabled, setPushEnabled] = useState(true);
  const [lightMode, setLightMode] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile</Text>

      {/* Profile Card */}
      <View style={styles.profileCard}>
        <View style={styles.profileRow}>
          <View style={styles.profileCircle}>
            <Text style={styles.profileInitial}>{profile.name.charAt(0)}</Text>
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.profileName}>{profile.name}</Text>
            <Text style={styles.profileEmail}>{profile.email}</Text>

            <TouchableOpacity
              style={styles.editProfileBtn}
              onPress={() => navigation.navigate("EditProfile")}
            >
              <Image
                source={require("../assets/images/edit.png")}
                style={{ width: 16, height: 16, marginRight: 6 }}
              />
              <Text style={styles.editProfileText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Achievements */}
      <Text style={styles.sectionTitle}>Achievements</Text>
      <View style={styles.achievementRow}>
        <View style={styles.achievementCard}>
          <Image
            source={require("../assets/images/star.png")}
            style={styles.achievementIcon}
          />
          <Text style={styles.achievementValue}>7 Day Streak</Text>
        </View>
        <View style={styles.achievementCard}>
          <Image
            source={require("../assets/images/target.png")}
            style={styles.achievementIcon}
          />
          <Text style={styles.achievementValue}>83 Tasks</Text>
        </View>
      </View>

      {/* Settings */}
      <Text style={styles.sectionTitle}>Settings</Text>
      <View style={styles.settingsCard}>
        {/* Push Notifications */}
        <View style={styles.settingsRow}>
          <Image
            source={require("../assets/images/notification.png")}
            style={styles.settingsIcon}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.settingsTitle}>Push Notifications</Text>
            <Text style={styles.settingsSubtitle}>Receive task reminders</Text>
          </View>
          <Switch
            value={pushEnabled}
            onValueChange={setPushEnabled}
            trackColor={{ false: "#5F4A62", true: "#E891D6" }}
            thumbColor="#fff"
          />
        </View>

        {/* Light Mode */}
        <View style={styles.settingsRow}>
          <Image
            source={require("../assets/images/lightmode.png")}
            style={styles.settingsIcon}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.settingsTitle}>Light Mode</Text>
            <Text style={styles.settingsSubtitle}>Toggle light theme</Text>
          </View>
          <Switch
            value={lightMode}
            onValueChange={setLightMode}
            trackColor={{ false: "#5F4A62", true: "#E891D6" }}
            thumbColor="#fff"
          />
        </View>

        {/* Privacy & Security */}
        <TouchableOpacity
          style={styles.settingsRow}
          onPress={() => navigation.navigate("Privacy")}
        >
          <Image
            source={require("../assets/images/setting.png")}
            style={styles.settingsIcon}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.settingsTitle}>Privacy & Security</Text>
            <Text style={styles.settingsSubtitle}>Manage your privacy settings</Text>
          </View>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>

        {/* Help & Support */}
        <TouchableOpacity
          style={styles.settingsRow2}
          onPress={() => navigation.navigate("Help")}
        >
          <Image
            source={require("../assets/images/help.png")}
            style={styles.settingsIcon}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.settingsTitle}>Help & Support</Text>
            <Text style={styles.settingsSubtitle}>Get help and contact us</Text>
          </View>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#221520", 
    paddingHorizontal: 20, 
    paddingTop: 20 
  },
  header: { 
    paddingTop: 30, 
    color: "#FFFFFF", 
    fontSize: 25, 
    paddingBottom: 10 
  },
  profileCard: { 
    backgroundColor: "#2D1F2B", 
    padding: 20, 
    borderRadius: 16, 
    borderWidth: 1, 
    borderColor: "#3D2938", 
    marginBottom: 20 
  },
  profileRow: { 
    flexDirection: "row", 
    alignItems: "center" 
  },
  profileCircle: { 
    width: 80, 
    height: 80, 
    borderRadius: 40, 
    backgroundColor: "#EADDFF", 
    justifyContent: "center", 
    alignItems: "center", 
    marginRight: 15 
  },
  profileInitial: { 
    color: "#221520", 
    fontSize: 16 
  },
  profileName: { 
    color: "#FFFFFF", 
    fontSize: 20, 
    fontWeight: "600" 
  },
  profileEmail: { 
    color: "#A894A3", 
    fontSize: 14, 
    marginTop: 2 
  },
  editProfileBtn: { 
    flexDirection: "row", 
    marginTop: 8, 
    paddingHorizontal: 18, 
    paddingVertical: 4, 
    backgroundColor: "#221520", 
    alignSelf: "flex-start", 
    borderRadius: 8, 
    borderWidth: 1, 
    borderColor: "#3D2938", 
    alignItems: "center" },
  editProfileText: { 
    color: "#FFFFFF", 
    fontSize: 13 
  },
  sectionTitle: { 
    color: "#FFFFFF", 
    fontSize: 20, 
    marginBottom: 10, 
    marginTop: 10 
  },
  achievementRow: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    marginBottom: 20 
  },
  achievementCard: { 
    width: "48%", 
    height: 150, 
    backgroundColor: "#2D1F2B", 
    padding: 20, 
    borderRadius: 16, 
    borderWidth: 1, 
    borderColor: "#3D2938", 
    justifyContent: "center", 
    alignItems: "center" 
  },
  achievementIcon: { 
    width: 45, 
    height: 45, 
    marginBottom: 10 
  },
  achievementValue: { 
    color: "#FFFFFF", 
    fontSize: 22, 
    textAlign: "center" 
  },
  settingsCard: { 
    backgroundColor: "#2D1F2B", 
    padding: 10, 
    borderRadius: 16, 
    borderWidth: 1, 
    borderColor: "#3D2938" 
  },
  settingsRow: { 
    flexDirection: "row", 
    alignItems: "center", 
    paddingVertical: 8, 
    borderBottomColor: "#3D2938", 
    borderBottomWidth: 1 
  },
  settingsRow2: { 
    flexDirection: "row", 
    alignItems: "center", 
    paddingVertical: 6 
  },
  settingsIcon: { 
    width: 30, 
    height: 30, 
    marginRight: 12 
  },
  settingsTitle: { 
    color: "#FFFFFF", 
    fontSize: 18 
  },
  settingsSubtitle: { 
    color: "#A894A3", 
    fontSize: 15 
  },
  chevron: { 
    color: "#A894A3", 
    fontSize: 35, 
    marginRight: 10 
  },
});
