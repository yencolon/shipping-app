import { useSession } from '@/context';
import { router, Stack } from 'expo-router';
import React, { useEffect } from 'react';
import { View } from 'react-native';

export default function Layout() {
  return (
    <View className='flex-1'>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name='login/index' options={{ headerShown: false }} />
        <Stack.Screen name='register/index' />
        <Stack.Screen name='recover/index' />
      </Stack>
    </View>
  );
}
