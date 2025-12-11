import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';

export default function HelpSupportScreen() {
    {/* Store email input and message */}
    const [email, setEmail] = useState('yasmina@example.com');
    const [message, setMessage] = useState('');

    return (
        <ScrollView style={[styles.container]} contentContainerStyle={{ paddingBottom: 80 }}>
            
            {/* Help */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Help</Text>

                <TouchableOpacity style={styles.helpCard}>
                    <View style={styles.helpRow}>
                        <View style={styles.iconContainer}>
                            <Image
                                source={require("../assets/images/book.png")}
                                style={{ width: 24, height: 24 }}
                            />
                        </View>
                        {/* Help Content Text */}
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
                    {/* Email */}
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

                    {/* Message */}
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

                    {/* Send Button */}
                    <TouchableOpacity style={styles.sendButton}>
                        <Image
                            source={require("../assets/images/send.png")}
                            style={{ width: 20, height: 20, marginRight: 8 }}
                        />
                        <Text style={styles.sendButtonText}>Send Message</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* App Information */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>App Information</Text>

                <View style={styles.card}>
                    <View style={styles.infoRowNoBorder}>
                        <Text style={styles.infoLabel}>Version</Text>
                        <Text style={styles.infoValue}>1.0.0</Text>
                    </View>

                    <View style={styles.infoRowNoBorder}>
                        <Text style={styles.infoLabel}>Created On</Text>
                        <Text style={styles.infoValue}>2025.10.15</Text>
                    </View>

                    <View style={styles.infoRowNoBorder}>
                        <Text style={styles.infoLabel}>Last Updated</Text>
                        <Text style={styles.infoValue}>2025.10.17</Text>
                    </View>

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
    section: {
        marginBottom: 25,
    },
    sectionTitle: {
        color: '#FFFFFF',
        fontSize: 20,
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
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    helpContent: {
        flex: 1,
    },
    helpTitle: {
        color: '#FFFFFF',
        fontSize: 18,
    },
    helpDescription: {
        color: '#A894A3',
        fontSize: 16,
    },
    chevron: {
        color: '#A894A3',
        fontSize: 35,
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
        padding: 12,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    sendButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
    },
    infoRowNoBorder: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 6,
    },
    infoLabel: {
        color: '#A894A3',
        fontSize: 17,
    },
    infoValue: {
        color: '#FFFFFF',
        fontSize: 17,
    },
    updateButton: {
        backgroundColor: '#221520',
        borderWidth: 1,
        borderColor: "#3D2938",
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
