import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useCart } from "../context/cartcontext";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";

const Cart = () => {
  const { cartItems, totalAmount, updateItemInCart } = useCart();
  const router = useRouter();
  const [productDetails, setProductDetails] = useState<any>({});

  const handleIncrease = (productId: string, quantity: number) => {
    updateItemInCart(productId, quantity + 1);
  };

  const handleDecrease = (productId: string, quantity: number) => {
    if (quantity > 1) {
      updateItemInCart(productId, quantity - 1);
    }
  };

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const ids = cartItems.map((item) => item.productId);
        const details = await Promise.all(
          ids.map((id) =>
            fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
              res.json()
            )
          )
        );
        const detailsMap = details.reduce((acc: any, product: any) => {
          acc[product.id] = product;
          return acc;
        }, {});
        setProductDetails(detailsMap);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [cartItems]);

  return (
    <View className="flex-1 p-4">
      <Text className="text-3xl mb-4 mt-7" >Your Cart</Text>

      {cartItems.length > 0 ? (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.productId.toString()}
          renderItem={({ item }) => {
            const product = productDetails[item.productId];
            return (
              <View className="mb-4 p-4 bg-white rounded-lg flex-row items-center">
                {product && (
                  <>
                    <Image
                      source={{ uri: product.image }}
                      className="w-20 h-20 mb-2"
                      resizeMode="contain"
                    />
                    <View className="flex-1 ml-4">
                      <Text className="font-semibold text-lg text-bubble-gum">
                        {product.title}
                      </Text>
                      <Text className="text-sm text-bermuda">
                        Price: ${product.price}
                      </Text>
                      <Text className="text-sm text-gray-600">
                        Quantity: {item.quantity}
                      </Text>
                    </View>
                    <View className="flex-row items-center">
                      <TouchableOpacity
                        onPress={() =>
                          handleDecrease(item.productId, item.quantity)
                        }
                      >
                        <Text className="text-2xl mx-2">-</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() =>
                          handleIncrease(item.productId, item.quantity)
                        }
                      >
                        <Text className="text-2xl mx-2">+</Text>
                      </TouchableOpacity>
                    </View>
                  </>
                )}
              </View>
            );
          }}
        />
      ) : (
        <Text>Your cart is empty.</Text>
      )}

      <View className="mt-auto">
        <Text className="text-xl font-bold">
          Total: ${totalAmount.toFixed(2)}
        </Text>
        <TouchableOpacity>
          <CustomButton text="Go to Checkout" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
