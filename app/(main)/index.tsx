import ProductCard from '@/components/ProductCard';
import { useSession } from '@/context';
import { router } from 'expo-router';
import React from 'react';
import { View, Text, Button } from 'react-native';
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
      <View className='flex flex-row flex-wrap justify-between items-center p-4 gap-4'>
        {[1, 2, 3, 4].map((item) => (
          <ProductCard key={item} />
        ))}
      </View>
    </SafeAreaView>
  );
}
