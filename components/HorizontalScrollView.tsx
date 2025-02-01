import React from 'react';
import { ScrollView, TouchableOpacity, Text } from 'react-native';

export default function HorizontalScrollView() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className='bg-primary'>
      <TouchableOpacity className='bg-green-400 p-8 m-2 rounded-2xl'>
        <Text>Snacks</Text>
      </TouchableOpacity>
      <TouchableOpacity className='bg-purple-400 p-8 m-2 rounded-2xl'>
        <Text>Snacks</Text>
      </TouchableOpacity>
      <TouchableOpacity className='bg-yellow-300 p-8 m-2 rounded-2xl'>
        <Text>Snacks</Text>
      </TouchableOpacity>
      <TouchableOpacity className='bg-white p-8 m-2 rounded-2xl'>
        <Text>Snacks</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
