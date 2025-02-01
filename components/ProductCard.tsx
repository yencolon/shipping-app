import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TextInput, View } from 'react-native';

export default function ProductCard() {
  return (
    <View className='w-5/12 mt-4 shadow-slate-950 bg-red-200'>
      <View className='flex-row rounded-md border-2 border-gray-300'>
        <View className='flex justify-center items-center w-1/12'>
          <Ionicons name='person-add' size={20} color='black' />
        </View>
        <TextInput
          className='w-11/12 pt-4 pb-4 rounded-r-md border-none'
          placeholderTextColor='#999'
        />
      </View>
    </View>
  );
}
