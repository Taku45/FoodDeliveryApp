import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { CartContext } from '../components/CartContext';

const CartScreen = () => {
  const { cartItems, removeFromCart, getTotalPrice } = useContext(CartContext);

  return (
    <View style={styles.container}>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyText}>Your cart is empty</Text>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>Price: R{item.price}</Text>
              <Button title="Remove" onPress={() => removeFromCart(item)} />
            </View>
          )}
        />
      )}
      <Text style={styles.totalText}>Total: R{getTotalPrice()}</Text>
      <Button title="Proceed to Checkout" onPress={() => { /* Handle checkout */ }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f4f8',
},
emptyText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: '#888',
},
itemContainer: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#d1d1d1',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
},
itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
},
itemPrice: {
    fontSize: 16,
    marginVertical: 5,
    color: '#007BFF',
},
totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
    color: '#28a745',
},

});

export default CartScreen;