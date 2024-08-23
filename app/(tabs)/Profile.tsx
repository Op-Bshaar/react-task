import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = () => {
  return (
    <SafeAreaView className="flex-1 p-4 bg-gray-100">
      <View className="flex-row items-center mb-4">
        
        <View className="ml-4">
          <Text className="text-2xl font-bold text-bubble-gum">Bashar</Text>
          <Text className="text-lg text-bermuda">bashar@example.com</Text>
        </View>
      </View>
      
      <TouchableOpacity className="flex-row items-center p-4 bg-white rounded-lg shadow-md mb-4">
        <Ionicons name="settings" size={24} color="gray" className="mr-3" />
        <Text className="text-lg text-gray-900">Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity className="flex-row items-center p-4 bg-white rounded-lg shadow-md mb-4">
        <Ionicons name="log-out" size={24} color="gray" className="mr-3" />
        <Text className="text-lg text-gray-900">Log Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Profile;
