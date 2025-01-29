import ThemedButton from '@/components/ui/ThemedButton';
import ThemedInputField from '@/components/ui/ThemedInputField';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }


    console.log('Logging in with:', { email, password });
    Alert.alert('Success', 'Logged in successfully!');
  };

  return (
    <View className="flex-1 justify-center items-center">
      <View className="justify-center items-center">
        <Image source={require('@/assets/images/react-logo.png')} className="w-24 h-24" />
        <Text className="font-bold text-2xl text-primary dark:text-primary-dark">Login</Text>
      </View>

      <View className="w-full space-y-4 items-center">
        <ThemedInputField
          placeholder='Email'
          value={email}
          onChangeText={setEmail}
          keyboardType='email-address'
          accessibilityLabel='Enter your email address'
        />

        <ThemedInputField
          placeholder='Password'
          value={password}
          onChangeText={setPassword}
          keyboardType='default'
          accessibilityLabel='Enter your password'
        />

        <ThemedButton
          title='Login'
          onPress={handleLogin}
          accessibilityLabel='Acceder' />

        <TouchableOpacity
          className="w-full items-center mt-4"
          onPress={() => Alert.alert('Forgot Password', 'Redirect to forgot password page.')}
        >
          <Text className="text-secondary dark:text-secondary-dark underline">
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginForm;