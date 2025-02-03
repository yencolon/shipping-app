import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, TextInput, Text, View, TouchableOpacity } from 'react-native';

interface IProductCardProps {
  addToCart: () => void;
}

export default function ProductCard({ addToCart }: IProductCardProps) {
  return (
    <View className='w-5/12 bg-slate-100 rounded-lg items-center'>
      <View className='flex-grow w-full h-40'>
        <Image source={require('@/assets/images/icon.png')} className='w-full h-full rounded-lg' />
      </View>
      <View className='w-full p-2'>
        <Text className='text-defaultSemiBold text-left'>Harina</Text>
        <View className='flex flex-row justify-between items-end w-full'>
          <View>
            <Text className='text-default text-xs'>1kg</Text>
            <Text className='text-defaultBold'>$20</Text>
          </View>
          <TouchableOpacity onPress={addToCart}>
            <Ionicons name='add-circle' size={30} color='black' />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
