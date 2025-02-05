import HorizontalScrollView from '@/components/HorizontalScrollView';
import ProductCard from '@/components/ProductCard';
import SearchBar from '@/components/SearchBar';
import { useSession } from '@/context';
import { useCart } from '@/context/CartContext';
import { router } from 'expo-router';
import React from 'react';
import { View, Text, Button, FlatList, TouchableHighlight } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Main() {
  const { logout } = useSession();
  const { addToCart, cart } = useCart();

  const handleLogout = () => {
    logout();
    //router.replace('/(auth)');
  };

  const handleAddToCart = () => {
    console.log('Add to cart' + cart);
    addToCart({
      product: {
        id: '1',
        name: 'Product 1',
        price: 100,
        image: 'https://via.placeholder.com/150',
        description: 'Description of product 1',
      },
      quantity: 1,
    });
  };

  return (
    <SafeAreaView className='flex-1 bg-primary'>
      <View className='bg-primary z-10 border-b border-default'>
        <SearchBar />
        <HorizontalScrollView />
      </View>

      <FlatList
        columnWrapperStyle={{ justifyContent: 'space-around', marginTop: 10 }}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        // renderItem={({ item }) => <ProductCard />}
        renderItem={({ item, index, separators }) => <ProductCard addToCart={handleAddToCart} />}
        numColumns={2}
        keyExtractor={(item) => item.toString()}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
