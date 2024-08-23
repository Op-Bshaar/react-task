import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import CartTabIcon from "@/components/Badge";
const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="compass" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Category"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="space-dashboard" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Cart"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <CartTabIcon color={color} />,
        }}
      />

      <Tabs.Screen
        name="Favorite"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={30} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;

const styles = StyleSheet.create({});
