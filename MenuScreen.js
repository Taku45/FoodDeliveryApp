import React, { useContext } from 'react';
import { FlatList, Text, View, Button, Image, StyleSheet } from 'react-native';
import { CartContext } from '../components/CartContext';
import { useNavigation } from '@react-navigation/native';

const MenuScreen = () => {
    const { addToCart } = useContext(CartContext);
    const navigation = useNavigation();

    const foodItems = [
        { id: 1, name: 'Pizza', description: 'Delicious cheese pizza', price: 120.85, image: require('./assets/pizza.webp') },
        { id: 2, name: 'Burger', description: 'Juicy beef burger', price: 89.99, image: require('./assets/burger.webp')},
        { id: 3, name: 'Salad', description: 'Fresh green salad', price: 45.99, image: require('./assets/salad.webp') },
        { id: 4, name: 'Chicken Biryani', description: 'Succulent Chicken Biryani', price: 102.99, image: require('./chicken biryani.webp')},
        { id: 5, name: 'Stew', description: 'Mesmarising Stew', price: 35.99, image: require('/.stew.webp')},
        { id: 6, name: 'Steak', description: 'Juicy beef steak', price: 180.99, image: require('./assets/steak.webp') },
        { id: 6, name: 'Braai Pie', description: 'Crunchy Braai Pie', price: 199.99, image: require('./assets/braai pie.webp')},
        { id: 6, name: 'Jollo Rice', description: 'Spicy Jollof Rice', price: 150.99, image: require('./assets/jollof rice.webp')}
    ];

    return (
        <View style={styles.container}>
            <FlatList
                data={foodItems}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Image source={item.image} style={styles.image} />
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>{item.name}</Text>
                            <Text style={styles.description}>{item.description}</Text>
                            <Text style={styles.price}>R{item.price.toFixed(2)}</Text>
                        </View>
                        <Button
                            title="Add to Cart"
                            onPress={() => {
                                addToCart(item);
                            }}
                            color="#007BFF"
                        />
                    </View>
                )}
                contentContainerStyle={styles.listContent}
            />
            <View style={styles.navigationButtons}>
                <Button
                    title="Go to Cart"
                    onPress={() => navigation.navigate('Cart')}
                    color="#28A745"
                />
                <Button
                    title="Go to Profile"
                    onPress={() => navigation.navigate('Profile')}
                    color="#28A745"
                />
                <Button
                    title="Go to Form"
                    onPress={() => navigation.navigate('Form1')}
                    color="#FFC107"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
        padding: 12,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        marginVertical: 10,
        padding: 14,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 10,
        marginRight: 15,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#222',
    },
    description: {
        fontSize: 15,
        color: '#555',
        marginVertical: 6,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FF6F61',
    },
    listContent: {
        paddingBottom: 25,
    },
    navigationButtons: {
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
});

    
export default MenuScreen;