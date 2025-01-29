import ThemedButton from '@/components/ui/ThemedButton';
import ThemedInputField from '@/components/ui/ThemedInputField';
import { Link, Stack, router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import ThemedStackBar from '@/components/ui/ThemedStackBar';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const backIcon = Platform.OS === 'ios' ? 'chevron-back' : 'arrow-back-sharp';

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    console.log('Logging in with:', { email, password });
    Alert.alert('Success', 'Logged in successfully!');
  };

  return (
    <SafeAreaView className='flex-1'>
      <View className='flex-1 justify-between items-center'>
        <ThemedStackBar title='Acceder' />
        {/* <Stack.Screen
          options={{
            title: 'Acceder',
            headerStyle: { backgroundColor: '#f4511e' },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerLeft: () => (
              <Ionicons name={backIcon} size={25} color='white' onPress={() => router.back()} />
            ),
          }}
        /> */}
        {/* <View className='justify-center items-center'>
          <Image source={require('@/assets/images/react-logo.png')} className='w-24 h-24' />
          <Text className='font-bold text-2xl text-primary dark:text-primary-dark'>Login</Text>
        </View> */}

        <View className='w-full space-y-5 items-center'>
          <ThemedInputField
            title='Correo'
            placeholder='Correo'
            value={email}
            onChangeText={setEmail}
            keyboardType='email-address'
            accessibilityLabel='Introduce tu correo'
            icon='mail-outline'
          />
          <ThemedInputField
            title='Contraseña'
            placeholder='Contraseña'
            value={password}
            onChangeText={setPassword}
            keyboardType='default'
            accessibilityLabel='Introduce tu contraseña'
            icon='lock-closed-outline'
          />
          <Link href='/recover' asChild>
            <TouchableOpacity className='items-end w-11/12'>
              <Text className='text-secondary underline'>¿Olvidaste tu contraseña?</Text>
            </TouchableOpacity>
          </Link>
        </View>
        <View className='w-full space-y-4 items-center'>
          <ThemedButton title='Entrar' onPress={handleLogin} accessibilityLabel='Entrar' />
          <Link href='/register' asChild>
            <TouchableOpacity className='w-full items-center mt-4'>
              <Text className='text-secondary underline'>No tienes cuenta? Crea una</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginForm;
