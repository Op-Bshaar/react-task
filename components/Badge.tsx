import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useCart } from "@/app/context/cartcontext";

const CartTabIcon = ({ color }:any) => {
  const { cartItems } = useCart();
  const cartItemCount = cartItems.length;

  return (
    <View style={{ position: "relative" }}>
      <MaterialCommunityIcons name="cart" size={30} color={color} />
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{cartItemCount}</Text>
        </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  badgeContainer: {
    position: "absolute",
    right: -10, 
    top: -3, 
    backgroundColor: "red",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default CartTabIcon;
