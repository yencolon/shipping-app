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
    <SafeAreaView className='flex-1 bg-red-300'>
      <Text>Shopping</Text>
      <Button title='log out' onPress={handleLogout}></Button>
    </SafeAreaView>
  );
}
