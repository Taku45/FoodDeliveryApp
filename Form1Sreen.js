import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { FormContext } from './FormContext';
import { useNavigation } from '@react-navigation/native';

const Form1Screen = () => {
    const { userDetails, setUserDetails } = useContext(FormContext);
    const navigation = useNavigation();
    const [errors, setErrors] = useState({});

    const validate = () => {
        let valid = true;
        let newErrors = {};

        if (!userDetails.name) {
            valid = false;
            newErrors.name = 'Name is required';
        }

        if (!userDetails.email || !/\S+@\S+\.\S+/.test(userDetails.email)) {
            valid = false;
            newErrors.email = 'Valid email is required';
        }

        if (!userDetails.phone || !/^\d{10}$/.test(userDetails.phone)) {
            valid = false;
            newErrors.phone = 'Valid phone number is required';
        }

        setErrors(newErrors);
        return valid;
    };

    const handleNext = () => {
        if (validate()) {
            navigation.navigate('Form2');
        }
    };

    return (
        <View style={styles.container}>
            <Text>Name:</Text>
            <TextInput
                value={userDetails.name}
                onChangeText={(text) => setUserDetails({ ...userDetails, name: text })}
                style={styles.input}
            />
            {errors.name && <Text style={styles.error}>{errors.name}</Text>}
            
            <Text>Email:</Text>
            <TextInput
                value={userDetails.email}
                onChangeText={(text) => setUserDetails({ ...userDetails, email: text })}
                style={styles.input}
            />
            {errors.email && <Text style={styles.error}>{errors.email}</Text>}
            
            <Text>Phone:</Text>
            <TextInput
                value={userDetails.phone}
                onChangeText={(text) => setUserDetails({ ...userDetails, phone: text })}
                style={styles.input}
                keyboardType="phone-pad"
            />
            {errors.phone && <Text style={styles.error}>{errors.phone}</Text>}
            
            <Button title="Next" onPress={handleNext} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
    },
    error: {
        color: 'red',
    },
});

export default Form1Screen;
