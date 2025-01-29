import ThemedButton from '@/components/ui/ThemedButton';
import ThemedInputField from '@/components/ui/ThemedInputField';
import ThemedStackBar from '@/components/ui/ThemedStackBar';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    // Add your registration logic here (e.g., API call)
    console.log('Registering with:', { name, email, password });
    Alert.alert('Success', 'Registered successfully!');
  };

  return (
    <SafeAreaView className='flex-1'>
      <View className='flex-1 justify-between items-center'>
        <ThemedStackBar title='Registro' />
        {/* <View className='justify-center items-center'>
        <Image source={require('@/assets/images/react-logo.png')} className='w-24 h-24' />
        <Text className='font-bold text-2xl text-primary dark:text-primary-dark'>Register</Text>
        </View> */}

        <View className='w-full space-y-10 items-center'>
          <ThemedInputField
            title='Nombre completo'
            placeholder='Ejemplo: María Pérez'
            value={name}
            onChangeText={setName}
            keyboardType='default'
            accessibilityLabel='Ingresa tu nombre aquí'
            icon='person-circle'
          />

          <ThemedInputField
            title='Correo electrónico'
            placeholder='Ejemplo: maria@correo.com'
            value={email}
            onChangeText={setEmail}
            keyboardType='email-address'
            accessibilityLabel='Ingresa tu correo electrónico'
            icon='mail'
          />

          <ThemedInputField
            title='Contraseña'
            placeholder='Ingresa una contraseña'
            value={password}
            onChangeText={setPassword}
            keyboardType='default'
            secureTextEntry
            accessibilityLabel='Ingresa una contraseña'
            icon='lock-closed'
          />

          <ThemedInputField
            title='Teléfono'
            placeholder='Ejemplo: (412) 552 36 14'
            value={password}
            onChangeText={setPassword}
            keyboardType='phone-pad'
            secureTextEntry
            accessibilityLabel='Ingresa tu teléfono'
            icon='call'
          />
          {/* 
        <ThemedInputField
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          keyboardType="default"
          secureTextEntry
          accessibilityLabel="Confirm your password"
        /> */}
        </View>
        <View className='w-full space-y-10 items-center'>
          <ThemedButton
            title='Crear cuenta'
            onPress={handleRegister}
            accessibilityLabel='Crear una cuenta'
          />

          <Link href='/login' asChild>
            <TouchableOpacity className='w-full items-center mt-4'>
              <Text className='text-secondary underline'>Ya tienes una cuenta? Inicia sesión</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterForm;
