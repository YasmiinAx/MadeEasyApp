import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';

export default function PrivacySecurityScreen() {
    const [locationEnabled, setLocationEnabled] = useState(true);
    const [notificationContent, setNotificationContent] = useState(false);
    const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);

    return (
        <ScrollView style={[styles.container, { paddingTop: 60 }]} contentContainerStyle={{ paddingBottom: 80 }}>
            <Text style={styles.headerText}>Privacy & Security</Text>

            {/* Privacy */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Privacy</Text>

                {/* Location */}
                <View style={styles.settingCard}>
                    <View style={styles.settingRow}>
                        <View style={styles.iconContainer}>
                            <Text style={styles.icon}>📍</Text>
                        </View>
                        <View style={styles.settingContent}>
                            <Text style={styles.settingTitle}>Location Access</Text>
                            <Text style={styles.settingDescription}>Access your device's location.</Text>
                        </View>
                        <Switch
                            value={locationEnabled}
                            onValueChange={setLocationEnabled}
                            trackColor={{ false: '#3D2938', true: '#E891D6' }}
                            thumbColor="#FFFFFF"
                        />
                    </View>
                </View>

                {/* Notifications */}
                <View style={styles.settingCard}>
                    <View style={styles.settingRow}>
                        <View style={styles.iconContainer}>
                            <Text style={styles.icon}>🔔</Text>
                        </View>
                        <View style={styles.settingContent}>
                            <Text style={styles.settingTitle}>Notification Content</Text>
                            <Text style={styles.settingDescription}>Hide task details in notifications.</Text>
                        </View>
                        <Switch
                            value={notificationContent}
                            onValueChange={setNotificationContent}
                            trackColor={{ false: '#3D2938', true: '#E891D6' }}
                            thumbColor="#FFFFFF"
                        />
                    </View>
                </View>
            </View>

            {/* Security stuff */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Security</Text>

                {/* Change Password */}
                <View style={styles.settingCard}>
                    <View style={styles.settingRow}>
                        <View style={styles.iconContainer}>
                            <Text style={styles.icon}>🔑</Text>
                        </View>
                        <View style={styles.settingContent}>
                            <Text style={styles.settingTitle}>Change Password</Text>
                            <Text style={styles.settingDescription}>Update your password</Text>
                        </View>
                        <TouchableOpacity style={styles.changeButton}>
                            <Text style={styles.changeButtonText}>Change</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Two-Factor Authentication demo */}
                <View style={styles.settingCard}>
                    <View style={styles.settingRow}>
                        <View style={styles.iconContainer}>
                            <Text style={styles.icon}>📱</Text>
                        </View>
                        <View style={styles.settingContent}>
                            <Text style={styles.settingTitle}>Two-Factor Authentication</Text>
                            <Text style={styles.settingDescription}>Add an extra layer of protection</Text>
                        </View>
                        <Switch
                            value={twoFactorEnabled}
                            onValueChange={setTwoFactorEnabled}
                            trackColor={{ false: '#3D2938', true: '#E891D6' }}
                            thumbColor="#FFFFFF"
                        />
                    </View>
                </View>
            </View>

            {/* Data Management */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Data Management</Text>

                <View style={styles.card}>
                    <Text style={styles.dataTitle}>Download your data</Text>
                    <Text style={styles.dataDescription}>
                        Get a copy of your tasks, achievements, and account data
                    </Text>
                    <TouchableOpacity style={styles.requestButton}>
                        <Text style={styles.requestButtonText}>Request Data</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Active Device */}
            <View style={styles.section}>
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
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#221520',
        padding: 20,
    },
    headerText: {
        color: '#FFFFFF',
        fontSize: 30,
        marginBottom: 25,
    },
    section: {
        marginBottom: 25,
    },
    sectionTitle: {
        color: '#FFFFFF',
        fontSize: 18,
        marginBottom: 12,
    },
    settingCard: {
        backgroundColor: '#2D1F2B',
        padding: 18,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#3D2938',
        marginBottom: 10,
    },
    settingRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        width: 40,
        height: 40,
        backgroundColor: '#271925',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    icon: {
        fontSize: 20,
    },
    settingContent: {
        flex: 1,
    },
    settingTitle: {
        color: '#FFFFFF',
        fontSize: 16,
        marginBottom: 4,
    },
    settingDescription: {
        color: '#A894A3',
        fontSize: 14,
    },
    changeButton: {
        backgroundColor: '#271925',
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 8,
    },
    changeButtonText: {
        color: '#FFFFFF',
        fontSize: 14,
    },
    card: {
        backgroundColor: '#2D1F2B',
        padding: 20,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#3D2938',
    },
    dataTitle: {
        color: '#FFFFFF',
        fontSize: 18,
        marginBottom: 8,
    },
    dataDescription: {
        color: '#A894A3',
        fontSize: 14,
        marginBottom: 15,
    },
    requestButton: {
        backgroundColor: '#271925',
        padding: 14,
        borderRadius: 12,
        alignItems: 'center',
    },
    requestButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    deviceCard: {
        backgroundColor: '#2D1F2B',
        padding: 18,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#3D2938',
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    deviceName: {
        color: '#FFFFFF',
        fontSize: 16,
        marginBottom: 4,
    },
    deviceDetails: {
        color: '#A894A3',
        fontSize: 14,
    },
    removeText: {
        color: '#FF6B6B',
        fontSize: 14,
    },
});