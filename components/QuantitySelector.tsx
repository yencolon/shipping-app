import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface QuantitySelectorProps {
  quantity: number;
  add: () => void;
  subtract: () => void;
}

export const QuantitySelector = ({ quantity, add, subtract }: QuantitySelectorProps) => {
  return (
    <View className='flex flex-row items-center border dark:border-white'>
      <TouchableOpacity className='p-1 w-1/3' onPress={subtract}>
        {quantity > 1 ? (
          <Text className='text-default text-center text-xl'>-</Text>
        ) : (
          <Ionicons name='trash-outline' color='white' size={16} />
        )}
      </TouchableOpacity>
      <Text className='text-default text-md font-extrabold text-center w-1/3'>{quantity}</Text>
      <TouchableOpacity className='p-1 w-1/3' onPress={add}>
        <Text className='text-default text-center text-xl'>+</Text>
      </TouchableOpacity>
    </View>
  );
};
