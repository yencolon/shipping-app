import { Stack } from 'expo-router';
import React from 'react';

export default function Layout() {

  return (
    <Stack>
      <Stack.Screen name="login/index" />
      <Stack.Screen name="register/index" />
    </Stack>
  );
}