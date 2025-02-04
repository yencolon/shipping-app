import React from 'react';
import { Image, Text, View } from 'react-native';
import { QuantitySelector } from './QuantitySelector';

export default function CartItem() {
  return (
    <View className='flex flex-row p-1 m-2 bg-secondary border-default border'>
      <View className='flex-grow h-20 w-2/12'>
        <Image source={require('../assets/images/icon.png')} className='w-full h-full rounded-lg' />
      </View>
      <View className='flex-grow w-7/12 justify-center items-start pl-4'>
        <Text className='text-default'>Cart Item</Text>
        <Text className='text-default'>Item description</Text>
      </View>
      <View className='flex-grow w-3/12 justify-center items-center'>
        <Text className='text-default'>Price</Text>
        <QuantitySelector />
      </View>
    </View>
  );
}
