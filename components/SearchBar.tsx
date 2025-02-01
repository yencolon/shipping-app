import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TextInput, View } from 'react-native';

export default function SearchBar() {
  return (
    <View className='flex-row items-center bg-gray-100 rounded-xl px-4 py-4 mx-4 my-2 shadow-gray-950'>
      <TextInput
        className='flex-1 text-base text-gray-700 font-bold'
        placeholder='Search...'
        placeholderTextColor='#9ca3af'
      />
      <Ionicons name='search' size={24} color='gray' />
    </View>
  );
}
