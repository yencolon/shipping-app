import ThemedButton from '@/components/ui/ThemedButton';
import ThemedInputField from '@/components/ui/ThemedInputField';
import ThemedStackBar from '@/components/ui/ThemedStackBar';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default function RecoverForm() {
  return (
    <View className='flex-1 justify-center items-center'>
      {/* <View className='justify-center items-center'>
        <Image source={require('@/assets/images/react-logo.png')} className='w-24 h-24' />
        <Text className='font-bold text-2xl text-primary dark:text-primary-dark'>Recuperar</Text>
      </View> */}
      <ThemedStackBar title='Recuperar acceso' />
      <View className='w-full space-y-4 items-center'>
        <ThemedInputField
          title='Recuperar acceso'
          placeholder='Ingresa el correo que registrate'
          //value={email}
          //onChangeText={setEmail}
          keyboardType='email-address'
          accessibilityLabel='Ingresa el correo que registrate'
        />
        <ThemedButton
          title='Recuperar'
          //  onPress={handleLogin}
          accessibilityLabel='Recuperar acceso'
        />
      </View>
    </View>
  );
}
