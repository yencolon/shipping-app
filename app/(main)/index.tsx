import HorizontalScrollView from '@/components/HorizontalScrollView';
import ProductCard from '@/components/ProductCard';
import SearchBar from '@/components/SearchBar';
import { useSession } from '@/context';
import { router } from 'expo-router';
import React from 'react';
import { View, Text, Button, FlatList, TouchableHighlight } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Main() {
  const { logout } = useSession();

  const handleLogout = () => {
    if (logout) {
      logout();
      //router.replace('/(auth)');
    }
  };

  return (
    <SafeAreaView className='flex-1 bg-primary'>
      <SearchBar />
      <View className='flex flex-row flex-wrap justify-between items-center p-4 gap-4'>
        <HorizontalScrollView />
      </View>

      <FlatList
        columnWrapperStyle={{ justifyContent: 'space-around', marginTop: 10 }}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        // renderItem={({ item }) => <ProductCard />}
        renderItem={({ item, index, separators }) => <ProductCard />}
        numColumns={2}
        keyExtractor={(item) => item.toString()}
      />
    </SafeAreaView>
  );
}
