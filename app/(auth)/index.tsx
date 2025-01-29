import ThemedButton from '@/components/ui/ThemedButton';
import { Link } from 'expo-router';
import React from 'react';
import { Button, Image, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Auth() {
  return (
    <SafeAreaView className='flex-1'>
      <View className="flex-1 justify-between items-center ">
        <View className="justify-center items-center">
          <Text className="font-bold text-5xl text-primary dark:text-primary-dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Text>
        </View>
        <View>
          <Image source={require('@/assets/images/react-logo.png')} className="w-24 h-24" />
        </View>
        <View className=" w-11/12 justify-center items-center">
          <Link href="/login" asChild>
            <ThemedButton
              title='Ya tengo cuenta'
              className="w-full"
              accessibilityLabel="Navigate to the login page" />
          </Link>
          <Link href="/register" asChild>
            <ThemedButton
              title='Crear cuenta'
              className="w-full"
              variant="secondary"
              accessibilityLabel="Navigate to the registration page" />
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
