import { Stack } from 'expo-router';
import React from 'react';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='login/index' options={{ headerShown: false }} />
      <Stack.Screen name='register/index' />
      <Stack.Screen name='recover/index' />
    </Stack>
  );
}
