import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Itemdata } from "@/constants/CategoriesItem";
import { productItem } from "@/types/carttypes";

const Home = () => {
  const router = useRouter();
  const [productItems, setProductItems] = useState<productItem[]>([]);

  const getProductItems = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data: productItem[] = await response.json();
      setProductItems(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProductItems();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white p-4">
      <View className="mt-5">
        <View className="flex-row justify-between items-center">
          <Ionicons name="home" size={30} color="green" />
          <Ionicons name="notifications" size={30} color="green" />
        </View>
      </View>

      <View className="mt-4">
        <View className="flex-row items-center bg-gray-300 rounded-lg p-2">
          <Ionicons name="search" size={20} color="#000" />
          <TextInput
            placeholder="Search the entire shop"
            className="ml-2 flex-1 p-1 bg-gray-300 text-center text-black"
          />
        </View>
        <View className="mt-2 flex-row items-center bg-blue-500 rounded-lg p-2">
          <Ionicons name="fast-food" size={20} color="#000"  />
          <TextInput
            placeholder="Delivery is 50% cheaper"
            className="ml-2 flex-1 p-1 text-white"
          />
        </View>
      </View>

      <View className="mt-4 bg-slate-500 rounded-xl p-4">
        <View className="flex-row justify-between items-center">
          <Text className="text-lg font-bold  text-midnight">Categories</Text>
          <Text className="text-tahiti">See all</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-2"
        >
          {Itemdata.map((item, index) => (
            <TouchableOpacity
              key={index}
              className="items-center mr-4"
              onPress={() => {}}
            >
              <MaterialCommunityIcons
                name={item.iconName as any}
                size={30}
                color={"white"}
                className="mb-2"
              />
              <Text className="text-xs text-center">{item.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View className="mt-4 bg-slate-500 rounded-xl p-5">
        <View className="flex-row justify-between items-center">
          <Text className="text-lg font-bold text-midnight">Flash Sale</Text>
          <Text className="text-gray-400">123</Text>
          <Text className="text-tahiti">See all</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-2"
        >
          <View className="flex-row">
            {productItems.map((item) => (
              <TouchableOpacity
                key={item.id}
                className="w-40 h-64 p-2 relative mt-4"
                onPress={() =>
                  router.push({
                    pathname: "../pages/[id]",
                    params: { id: item.id },
                  })
                }
                
              >
                <Image
                  source={{ uri: item.image }}
                  className=" relative w-full h-1/2 bg-gray-300"
                  resizeMode="contain"
                />
                <View className="absolute top-0 right-0">
                  <Ionicons name="heart" size={20} color="white" />
                </View>

                <Text className="mt-2 font-bold text-center text-bubble-gum">{item.title}</Text>
                <Text className="mt-1 text-bermuda text-center">
                  ${item.price}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>

  );
};

export default Home;
