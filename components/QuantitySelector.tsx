import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export const QuantitySelector = () => {
  return (
    <View className='flex flex-row items-center border-default border'>
      <TouchableOpacity className='flex-grow p-1'>
        <Text className='text-default text-center text-lg'>-</Text>
      </TouchableOpacity>
      <Text className='text-default text-center flex-grow'>1</Text>
      <TouchableOpacity className='flex-grow  p-1'>
        <Text className='text-default text-center text-lg'>+</Text>
      </TouchableOpacity>
    </View>
  );
};
