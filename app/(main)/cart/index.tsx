import { useCart } from '@/context/CartContext';
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

export default function Cart() {
  const { cart } = useCart();
  return (
    <SafeAreaView className='flex-1'>
      <View className='flex-1'>
        {cart.map((item) => (
          <View key={item.id}>
            <Text>{item.name}</Text>
            <Text>{item.quantity}</Text>
            <Text>{item.price}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}
