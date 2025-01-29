import { Stack } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

export default function Layout() {
  return (
    <View className="flex-1">
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login/index" />
        <Stack.Screen name="register/index" />
      </Stack>
    </View>
  );
}
