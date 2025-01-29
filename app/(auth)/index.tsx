import ThemedButton from '@/components/ui/ThemedButton';
import { Link } from 'expo-router';
import React from 'react';
import { Button, Image, Pressable, Text, View } from 'react-native';

export default function Auth() {
  return (
    <View className="flex-1 justify-around items-center ">
      <View className="justify-center items-center">
        <Image source={require('@/assets/images/react-logo.png')} className="w-24 h-24" />
        <Text className="font-bold text-2xl text-primary dark:text-primary-dark">Auth</Text>
      </View>
      <View className=" w-11/12 justify-center items-center">
        <Link href="/login" asChild>
          <ThemedButton
            title='Login'
            className="w-full"
            accessibilityLabel="Navigate to the login page" />
        </Link>
        <Link href="/register" asChild>
          <ThemedButton
            title='Register'
            className="w-full"
            variant="secondary"
            accessibilityLabel="Navigate to the registration page" />
        </Link>
      </View>
    </View>
  );
}
