// ProfileScreen.js
import React, { useContext } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import { FormContext } from './FormContext';
import { ThemeContext } from './ThemeContext';

const ProfileScreen = () => {
    const { userDetails, addressDetails, paymentDetails } = useContext(FormContext);
    const { theme, updateTheme } = useContext(ThemeContext);

    const cardNumber = paymentDetails?.cardNumber || '';  

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={[styles.card, { backgroundColor: theme.cardBackground }]}>
                <Text style={[styles.title, { color: theme.textColor }]}>User Information</Text>
                <Text style={[styles.text, { color: theme.textColor }]}>Name: {userDetails.name}</Text>
            </View>

            <View style={[styles.card, { backgroundColor: theme.cardBackground }]}>
                <Text style={[styles.title, { color: theme.textColor }]}>Address</Text>
                <Text style={[styles.text, { color: theme.textColor }]}>Address: {addressDetails.address}</Text>
            </View>

            <View style={[styles.card, { backgroundColor: theme.cardBackground }]}>
                <Text style={[styles.title, { color: theme.textColor }]}>Payment Details</Text>
                <Text style={[styles.text, { color: theme.textColor }]}>
                    Payment: **** **** **** {cardNumber.slice(-4)}
                </Text>
            </View>

            <View style={styles.themeContainer}>
                <TextInput
                    placeholder="Text Color"
                    placeholderTextColor="#999"
                    onChangeText={(color) => updateTheme({ ...theme, textColor: color })}
                    style={[styles.input, { borderColor: theme.textColor }]}
                />
                <TextInput
                    placeholder="Background Color"
                    placeholderTextColor="#999"
                    onChangeText={(color) => updateTheme({ ...theme, background: color })}
                    style={[styles.input, { borderColor: theme.textColor }]}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#f5f5f7', 
    },
    card: {
        padding: 18,
        marginBottom: 18,
        borderRadius: 12,
        backgroundColor: '#ffffff', 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 5,
    },
    title: {
        fontSize: 20, 
        fontWeight: 'bold',
        color: '#333', 
        marginBottom: 12,
    },
    text: {
        fontSize: 16,
        lineHeight: 24, 
        color: '#555', 
    },
    themeContainer: {
        marginTop: 25, 
    },
    input: {
        borderWidth: 1,
        borderRadius: 8, 
        borderColor: '#ddd', 
        padding: 12,
        marginBottom: 12,
        backgroundColor: '#f9f9f9', 
    },
 
});

export default ProfileScreen;
