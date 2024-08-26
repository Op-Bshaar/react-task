import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { useCart } from "../context/cartcontext";
import CustomButton from "@/components/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { MockProductData } from "../mockdata/mock";
const Cartitem = () => {
  const { id } = useLocalSearchParams();
  const [productItem, setProductItem] = useState<any>(null);
  const { addItemtoCart } = useCart(); 
  const [showMore, setShowMore] = useState(false);

  const getProductItem = () => {
    const product = MockProductData.find((item) => item.id === id);
    setProductItem(product || null);
  };

  useEffect(() => {
    if (id) {
      getProductItem();
    }
  }, [id]);

  if (!productItem) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View className="flex-1 p-4">
        <SafeAreaView className="mt-8">
          <View className="flex-row justify-center">
            <Image
              source={{ uri: productItem.image }}
              className="w-48 h-48"
              resizeMode="contain"
            />
          </View>
          <Text className="mt-4 text-xl font-bold text-center text-bubble-gum">
            {productItem.title}
          </Text>
          <Text className="mt-2 text-center text-bermuda">
            ${productItem.price}
          </Text>
          <Text className="mt-2 text-center">{productItem.category}</Text>
          <Text className="mt-4 text-center text-tahiti">
            {showMore
              ? productItem.description
              : productItem.description?.slice(0, 90) + "....."}
            <TouchableOpacity
              onPress={() => setShowMore(!showMore)}
            >
              <Text className="text-lg text-midnight">{showMore ? 'Show less' : 'Show more'}</Text>
            </TouchableOpacity>
          </Text>

          <TouchableOpacity
            className="mt-6"
            onPress={() => addItemtoCart(productItem.id)}
          >
            <CustomButton text="Add to Cart" />
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </>
  );
};

export default Cartitem;
