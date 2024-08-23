import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const Category = () => {
  return (
    <SafeAreaView className="p-4 bg-white rounded-lg shadow-lg flex flex-row items-center justify-between">
      <Text className="text-lg font-semibold text-bubble-gum">Category Name</Text>
      <TouchableOpacity className="flex-row items-center">
        <Text className="text-bermuda text-sm mr-2">Explore</Text>
        <Ionicons name="arrow-forward" size={16} color="blue" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Category;
