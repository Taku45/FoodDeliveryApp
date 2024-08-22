import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { FormContext } from './FormContext';
import { useNavigation } from '@react-navigation/native';

const Form2Screen = () => {
    const { addressDetails, setAddressDetails } = useContext(FormContext);
    const navigation = useNavigation();
    const [errors, setErrors] = useState({});

    const validate = () => {
        let valid = true;
        let newErrors = {};

        if (!addressDetails.address) {
            valid = false;
            newErrors.address = 'Address is required';
        }

        if (!addressDetails.city) {
            valid = false;
            newErrors.city = 'City is required';
        }

        if (!addressDetails.state) {
            valid = false;
            newErrors.state = 'State is required';
        }

        if (!addressDetails.zip || !/^\d{5}$/.test(addressDetails.zip)) {
            valid = false;
            newErrors.zip = 'Valid zip code is required';
        }

        setErrors(newErrors);
        return valid;
    };

    const handleNext = () => {
        if (validate()) {
            navigation.navigate('Form3');
        }
    };

    return (
        <View style={styles.container}>
            <Text>Address:</Text>
            <TextInput
                value={addressDetails.address}
                onChangeText={(text) => setAddressDetails({ ...addressDetails, address: text })}
                style={styles.input}
            />
            {errors.address && <Text style={styles.error}>{errors.address}</Text>}
            
            <Text>City:</Text>
            <TextInput
                value={addressDetails.city}
                onChangeText={(text) => setAddressDetails({ ...addressDetails, city: text })}
                style={styles.input}
            />
            {errors.city && <Text style={styles.error}>{errors.city}</Text>}
            
            <Text>State:</Text>
            <TextInput
                value={addressDetails.state}
                onChangeText={(text) => setAddressDetails({ ...addressDetails, state: text })}
                style={styles.input}
            />
            {errors.state && <Text style={styles.error}>{errors.state}</Text>}
            
            <Text>Zip Code:</Text>
            <TextInput
                value={addressDetails.zip}
                onChangeText={(text) => setAddressDetails({ ...addressDetails, zip: text })}
                style={styles.input}
                keyboardType="numeric"
            />
            {errors.zip && <Text style={styles.error}>{errors.zip}</Text>}
            
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

export default Form2Screen;
