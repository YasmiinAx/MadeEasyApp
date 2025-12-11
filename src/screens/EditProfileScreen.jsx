import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useProfile } from "../components/context/profile-context";

export default function EditProfileScreen({ navigation }) {
    const { profile, updateProfile } = useProfile();
    
    {/* Local States For The Form Inputs */}
    const [name, setName] = useState(profile.name);
    const [email, setEmail] = useState(profile.email);
    const [phone, setPhone] = useState(profile.phone);
    
    {/* Save Profile Updates */}
    const handleSave = () => {
        updateProfile({ name, email, phone });
        navigation.goBack();
    };
    
    return (
        <ScrollView style={styles.container}>
            
            {/* Profile Initial */}
            <View style={styles.profileCircle}>
                <Text style={styles.profileInitial}>{name ? name.charAt(0) : "?"}</Text>
            </View>
            
            {/* Input Form */}
            <View style={styles.card}> 
                <Text style={styles.label}>Full Name</Text>
                <TextInput value={name} onChangeText={setName} style={styles.input} />
                
                <Text style={styles.label}>Email</Text>
                <TextInput value={email} onChangeText={setEmail} style={styles.input} />
                
                <Text style={styles.label}>Phone</Text>
                <TextInput value={phone} onChangeText={setPhone} style={styles.input} keyboardType="phone-pad" />
            </View>
            
            {/* Save Button */}
            <TouchableOpacity style={styles.saveBtnTop} onPress={handleSave}>
                <Text style={styles.saveTextTop}>Save</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: "#221520", 
        paddingHorizontal: 20 
    },
    saveBtnTop: { 
        marginTop: 20, 
        backgroundColor: "#E891D6", 
        paddingVertical: 10, 
        paddingHorizontal: 28, 
        borderRadius: 12 
    },
    saveTextTop: { 
        color: "#FFFFFF", 
        fontSize: 25, 
        textAlign: 'center' 
    },
    card: { 
        backgroundColor: "#2D1F2B", 
        padding: 20, 
        borderRadius: 16, 
        borderWidth: 1, 
        borderColor: "#3D2938", 
        marginBottom: 20 
    },
    profileCircle: {
        width: 130,
        height: 130,
        borderRadius: 65,
        backgroundColor: "#EADDFF",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginVertical: 50,
    },
    profileInitial: { 
        color: "#221520", 
        fontSize: 40 
    },
    label: { 
        fontSize: 18, 
        color: "#FFFFFF", 
        marginBottom: 5 
    },
    input: { 
        borderRadius: 10, 
        padding: 15, 
        fontSize: 16, 
        marginBottom: 20, 
        color: "#FFFFFF", 
        backgroundColor: "#271925" 
    },
});