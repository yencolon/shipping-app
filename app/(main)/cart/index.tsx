import CartItem from '@/components/CartItem';
import HorizontalScrollView from '@/components/HorizontalScrollView';
import SearchBar from '@/components/SearchBar';
import ThemedButton from '@/components/ThemedButton';
import { useBottomTabOverflow } from '@/components/ui/TabBarBackground';
import { useCart } from '@/context/CartContext';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Cart() {
  const { cart } = useCart();
  const bottom = useBottomTabBarHeight();
  const a = useBottomTabOverflow();

  return (
    <SafeAreaView className='flex-1 bg-primary overflow-hidden'>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        // renderItem={({ item }) => <ProductCard />}
        renderItem={({ item, index, separators }) => <CartItem />}
        keyExtractor={(item) => item.toString()}
      />
      <View
        className='flex flex-row justify-between items-center px-2 py-1 border-t border-default'
        style={{ paddingBottom: a }}>
        <Text className='text-default'>Total: {a}</Text>
        <ThemedButton
          title='Pagar'
          className='w-2/6 h-16 mb-2'
          textClassName='text-sm text-white'
        />
      </View>
    </SafeAreaView>
  );
}
