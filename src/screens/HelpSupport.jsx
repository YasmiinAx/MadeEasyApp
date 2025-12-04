import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';

export default function HelpSupportScreen() {
    const [email, setEmail] = useState('yasmina@example.com');
    const [message, setMessage] = useState('');

    return (
        <ScrollView style={[styles.container, { paddingTop: 60 }]} contentContainerStyle={{ paddingBottom: 80 }}>
            {/* Header */}
            <Text style={styles.headerText}>Help & Support</Text>

            {/* Help */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Help</Text>

                <TouchableOpacity style={styles.helpCard}>
                    <View style={styles.helpRow}>
                        <View style={styles.iconContainer}>
                            <Text style={styles.icon}>📖</Text>
                        </View>
                        <View style={styles.helpContent}>
                            <Text style={styles.helpTitle}>Getting Started</Text>
                            <Text style={styles.helpDescription}>Learn the basics of using the app</Text>
                        </View>
                        <Text style={styles.chevron}>›</Text>
                    </View>
                </TouchableOpacity>
            </View>

            {/* Support */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Contact Support</Text>

                <View style={styles.card}>
                    {/* Email Input (could grab from Profile but will need that section done so this is just forr now) */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.inputLabel}>Email</Text>
                        <TextInput
                            style={styles.input}
                            value={email}
                            onChangeText={setEmail}
                            placeholder="Enter your email"
                            placeholderTextColor="#A894A3"
                            keyboardType="email-address"
                        />
                    </View>

                    {/* insert text here stuff for contacting support */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.inputLabel}>Message</Text>
                        <TextInput
                            style={[styles.input, styles.messageInput]}
                            value={message}
                            onChangeText={setMessage}
                            placeholder="Describe your issue or question..."
                            placeholderTextColor="#A894A3"
                            multiline
                            numberOfLines={6}
                            textAlignVertical="top"
                        />
                    </View>

                    {/* Button */}
                    <TouchableOpacity style={styles.sendButton}>
                        <Text style={styles.sendIcon}>✉️</Text>
                        <Text style={styles.sendButtonText}>Send Message</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* App Information */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>App Information</Text>

                <View style={styles.card}>
                    {/* Version */}
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Version</Text>
                        <Text style={styles.infoValue}>1.0.0</Text>
                    </View>

                    {/* Created */}
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Created On</Text>
                        <Text style={styles.infoValue}>2025.10.15</Text>
                    </View>

                    {/* Update Dat4e */}
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Last Updated</Text>
                        <Text style={styles.infoValue}>2025.10.17</Text>
                    </View>

                    {/* Check Updates demo */}
                    <TouchableOpacity style={styles.updateButton}>
                        <Text style={styles.updateButtonText}>Check All Updates</Text>
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
    helpCard: {
        backgroundColor: '#2D1F2B',
        padding: 18,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#3D2938',
    },
    helpRow: {
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
    helpContent: {
        flex: 1,
    },
    helpTitle: {
        color: '#FFFFFF',
        fontSize: 16,
        marginBottom: 4,
    },
    helpDescription: {
        color: '#A894A3',
        fontSize: 14,
    },
    chevron: {
        color: '#A894A3',
        fontSize: 28,
    },
    card: {
        backgroundColor: '#2D1F2B',
        padding: 20,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#3D2938',
    },
    inputGroup: {
        marginBottom: 20,
    },
    inputLabel: {
        color: '#FFFFFF',
        fontSize: 16,
        marginBottom: 10,
    },
    input: {
        backgroundColor: '#271925',
        borderRadius: 12,
        padding: 14,
        color: '#FFFFFF',
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#3D2938',
    },
    messageInput: {
        height: 120,
        paddingTop: 14,
    },
    sendButton: {
        backgroundColor: '#E891D6',
        padding: 16,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    sendIcon: {
        fontSize: 18,
        marginRight: 8,
    },
    sendButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#3D2938',
    },
    infoLabel: {
        color: '#A894A3',
        fontSize: 16,
    },
    infoValue: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    updateButton: {
        backgroundColor: '#271925',
        padding: 14,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 15,
    },
    updateButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});