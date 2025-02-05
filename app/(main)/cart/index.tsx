import CartItem from '@/components/CartItem';
import ThemedButton from '@/components/ThemedButton';
import { useBottomTabOverflow } from '@/components/ui/TabBarBackground';
import { useCart } from '@/context/CartContext';
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Cart() {
  const { cart, getTotal, updateCartItemQuantity, removeFromCart } = useCart();
  const bottom = useBottomTabOverflow();
  console.log('Render Cart');

  return (
    <SafeAreaView className='flex-1 bg-primary overflow-hidden'>
      <FlatList
        data={cart}
        // renderItem={({ item }) => <ProductCard />}
        renderItem={({ item, index, separators }) => (
          <CartItem
            {...item.product}
            quantity={item.quantity}
            addItem={() => updateCartItemQuantity(item.product.id, item.quantity + 1)}
            removeItem={() =>
              item.quantity == 1
                ? removeFromCart(item.product.id)
                : updateCartItemQuantity(item.product.id, item.quantity - 1)
            }
          />
        )}
        keyExtractor={(item) => item.toString()}
      />
      <View
        className='flex flex-row justify-between items-center px-2 py-1 border-t border-default'
        style={{ paddingBottom: bottom }}>
        <Text className='text-default'>Total: {getTotal()}</Text>
        <ThemedButton
          title='Pagar'
          className='w-2/6 h-16 mb-2'
          textClassName='text-sm text-white'
        />
      </View>
    </SafeAreaView>
  );
}
