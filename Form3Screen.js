import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { FormContext } from './FormContext';
import { useNavigation } from '@react-navigation/native';

const Form3Screen = () => {
    const { paymentDetails, setPaymentDetails } = useContext(FormContext);
    const navigation = useNavigation();
    const [errors, setErrors] = useState({});

    const validate = () => {
        let valid = true;
        let newErrors = {};

        if (!paymentDetails.cardNumber || !/^\d{16}$/.test(paymentDetails.cardNumber)) {
            valid = false;
            newErrors.cardNumber = 'Valid card number (16 digits) is required';
        }

        if (!paymentDetails.expiryMonth || !paymentDetails.expiryYear) {
            valid = false;
            newErrors.expiry = 'Expiry date (MM/YYYY) is required';
        } else {
            const currentYear = new Date().getFullYear();
            const currentMonth = new Date().getMonth() + 1;
            const expiryYear = parseInt(paymentDetails.expiryYear, 10);
            const expiryMonth = parseInt(paymentDetails.expiryMonth, 10);

            if (expiryYear < currentYear || (expiryYear === currentYear && expiryMonth < currentMonth)) {
                valid = false;
                newErrors.expiry = 'Card is expired';
            }
        }

        if (!paymentDetails.cvv || !/^\d{3}$/.test(paymentDetails.cvv)) {
            valid = false;
            newErrors.cvv = 'Valid CVV (3 digits) is required';
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = () => {
        if (validate()) {
            // Handle form submission
            console.log('Form submitted successfully');
            navigation.navigate('Profile'); // Navigate to Profile screen
        }
    };

    return (
        <View style={styles.container}>
            <Text>Card Number:</Text>
            <TextInput
                value={paymentDetails.cardNumber}
                onChangeText={(text) => setPaymentDetails({ ...paymentDetails, cardNumber: text })}
                style={styles.input}
                keyboardType="numeric"
                maxLength={16}
            />
            {errors.cardNumber && <Text style={styles.error}>{errors.cardNumber}</Text>}
            
            <Text>Expiry Month (MM):</Text>
            <TextInput
                value={paymentDetails.expiryMonth}
                onChangeText={(text) => setPaymentDetails({ ...paymentDetails, expiryMonth: text })}
                style={styles.input}
                keyboardType="numeric"
                maxLength={2}
            />
            {errors.expiry && <Text style={styles.error}>{errors.expiry}</Text>}
            
            <Text>Expiry Year (YYYY):</Text>
            <TextInput
                value={paymentDetails.expiryYear}
                onChangeText={(text) => setPaymentDetails({ ...paymentDetails, expiryYear: text })}
                style={styles.input}
                keyboardType="numeric"
                maxLength={4}
            />
            {errors.expiry && <Text style={styles.error}>{errors.expiry}</Text>}
            
            <Text>CVV:</Text>
            <TextInput
                value={paymentDetails.cvv}
                onChangeText={(text) => setPaymentDetails({ ...paymentDetails, cvv: text })}
                style={styles.input}
                keyboardType="numeric"
                maxLength={3}
            />
            {errors.cvv && <Text style={styles.error}>{errors.cvv}</Text>}
            
            <Button title="Submit" onPress={handleSubmit} />
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

export default Form3Screen;
