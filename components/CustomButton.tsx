import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
interface CustomButtonProps {
    text: string;
  }
  
const CustomButton = ({text }:CustomButtonProps) => {
  return (
    <View className='p-4  bg-orange-600 rounded-2xl border-0 '>
      <Text className='text-white text-center text-lg font-semibold'>{text}</Text>
    </View>
  )
}

export default CustomButton

const styles = StyleSheet.create({})