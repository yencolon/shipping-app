import ThemedButton from '@/components/ThemedButton';
import { useSession } from '@/context';
import { Link, router } from 'expo-router';
import React, { useEffect } from 'react';
import {
  Alert,
  BackHandler,
  Button,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Auth() {
  return (
    <SafeAreaView className='flex-1 bg-primary'>
      <View className='flex-1 justify-between items-center '>
        <View className='justify-center items-center'>
          <Text className='text-default font-bold text-5xl'>
            Lorem ipsum dolor sit ramet, consectetur adipiscing elit
          </Text>
        </View>
        <View>
          <Image source={require('@/assets/images/react-logo.png')} className='w-24 h-24' />
        </View>
        <View className=' w-11/12 justify-center items-center'>
          <Link href='/login' asChild>
            <ThemedButton
              title='Ya tengo cuenta'
              className='w-full'
              accessibilityLabel='Navigate to the login page'
            />
          </Link>
          <Link href='/register' asChild>
            <ThemedButton
              title='Crear cuenta'
              className='w-full'
              variant='secondary'
              accessibilityLabel='Navigate to the registration page'
            />
          </Link>
          <Link href='/(main)' replace asChild>
            <TouchableOpacity>
              <Text>Regresar al inicio</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
