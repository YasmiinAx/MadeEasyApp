import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/ProfileScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import HelpSupportScreen from "./HelpSupport";
import PrivacySecurityScreen from "./PrivacySecurity";

const Stack = createNativeStackNavigator();

export default function ProfileStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileMain"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{
          headerStyle: {
            backgroundColor: "#221520",
          },
          headerTintColor: "#ffffffff",
          headerTitle: "Edit Profile",
        }}
      />

      <Stack.Screen
        name="Privacy"
        component={PrivacySecurityScreen}
        options={{
            headerStyle: {
            backgroundColor: "#221520",
            },
            headerTintColor: "#ffffffff",
            headerTitle: "Privacy & Security",
            headerBackTitle: "Back",
        }}
      />

      <Stack.Screen
        name="Help"
        component={HelpSupportScreen}
        options={{
            headerStyle: {
            backgroundColor: "#221520",
            },
            headerTintColor: "#ffffffff",
            headerTitle: "Help & Support",
            headerBackTitle: "Back",
        }}
      />
    </Stack.Navigator>
  );
}
