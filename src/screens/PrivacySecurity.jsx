import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Switch,
} from "react-native";

export default function PrivacySecurityScreen() {
  const [locationEnabled, setLocationEnabled] = useState(true);
  const [notificationContent, setNotificationContent] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 70 }}>
      
      {/* Privacy Section */}
      <Text style={styles.sectionTitle}>Privacy</Text>
      <View style={styles.settingsCard}>

        {/* Location Access */}
        <View style={styles.settingsRow}>
          <Image
            source={require("../assets/images/map.png")}
            style={styles.icon}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.settingTitle}>Location Access</Text>
            <Text style={styles.settingSubtitle}>
              Access your device's location.
            </Text>
          </View>
          <Switch
            value={locationEnabled}
            onValueChange={setLocationEnabled}
            trackColor={{ false: "#5F4A62", true: "#E891D6" }}
            thumbColor="#fff"
          />
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Notification Content */}
        <View style={styles.settingsRow}>
          <Image
            source={require("../assets/images/eye.png")}
            style={styles.icon}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.settingTitle}>Notification Content</Text>
            <Text style={styles.settingSubtitle}>
              Hide task details in notifications.
            </Text>
          </View>
          <Switch
            value={notificationContent}
            onValueChange={setNotificationContent}
            trackColor={{ false: "#5F4A62", true: "#E891D6" }}
            thumbColor="#fff"
          />
        </View>
      </View>

      {/* Security Section */}
      <Text style={styles.sectionTitle}>Security</Text>
      <View style={styles.settingsCard}>

        {/* Two-Factor Authentication */}
        <View style={styles.settingsRow}>
          <Image
            source={require("../assets/images/phone.png")}
            style={styles.icon}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.settingTitle}>Two-Factor Authentication</Text>
            <Text style={styles.settingSubtitle}>
              Add an extra layer of protection
            </Text>
          </View>

          <Switch
            value={twoFactorEnabled}
            onValueChange={setTwoFactorEnabled}
            trackColor={{ false: "#5F4A62", true: "#E891D6" }}
            thumbColor="#fff"
          />
        </View>
      </View>

      {/* Data Management */}
      <Text style={styles.sectionTitle}>Data Management</Text>
      <View style={styles.fullCard}>
        <Text style={styles.dataTitle}>Download your data</Text>
        <Text style={styles.dataSubtitle}>
          Get a copy of your tasks, achievements, and account data
        </Text>
        <TouchableOpacity style={styles.requestBtn}>
          <Text style={styles.requestBtnText}>Request Data</Text>
        </TouchableOpacity>
      </View>

      {/* Active Devices */}
      <Text style={styles.sectionTitle}>Active Devices</Text>
      <View style={styles.deviceCard}>
        <View>
          <Text style={styles.deviceName}>iPhone 15</Text>
          <Text style={styles.deviceDetails}>Calgary, AB • Active now</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.removeText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#221520",
    padding: 20,
  },
  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  settingsCard: {
    backgroundColor: "#2D1F2B",
    paddingVertical: 10,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#3D2938",
    marginBottom: 15,
  },
  settingsRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 12,
  },
  divider: {
    height: 1,
    backgroundColor: "#3D2938",
    marginHorizontal: 10,
  },
  icon: {
    width: 28,
    height: 28,
    marginRight: 12,
    resizeMode: "contain",
  },
  settingTitle: {
    color: "#FFFFFF",
    fontSize: 17,
  },
  settingSubtitle: {
    color: "#A894A3",
    fontSize: 14,
    marginTop: 2,
  },
  changeBtn: {
    backgroundColor: "#271925",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#3D2938",
  },
  changeBtnText: {
    color: "#FFFFFF",
    fontSize: 13,
  },
  fullCard: {
    backgroundColor: "#2D1F2B",
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#3D2938",
    marginBottom: 15,
  },
  dataTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    marginBottom: 5,
  },
  dataSubtitle: {
    color: "#A894A3",
    fontSize: 16,
    marginBottom: 12,
  },
  requestBtn: {
    backgroundColor: "#221520",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#3D2938",
  },
  requestBtnText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  deviceCard: {
    backgroundColor: "#2D1F2B",
    padding: 18,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#3D2938",
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  deviceName: {
    color: "#FFFFFF",
    fontSize: 18,
    marginBottom: 4,
  },
  deviceDetails: {
    color: "#A894A3",
    fontSize: 15,
  },
  removeText: {
    color: "red",
    fontSize: 16,
  },
});
