import ThemedButton from '@/components/ui/ThemedButton';
import ThemedInputField from '@/components/ui/ThemedInputField';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';

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
    <View className="flex-1 justify-center items-center">
      <View className="justify-center items-center">
        <Image source={require('@/assets/images/react-logo.png')} className="w-24 h-24" />
        <Text className="font-bold text-2xl text-primary dark:text-primary-dark">Register</Text>
      </View>

      <View className="w-full space-y-4 items-center">
        <ThemedInputField
          placeholder="Full Name"
          value={name}
          onChangeText={setName}
          keyboardType="default"
          accessibilityLabel="Enter your full name"
        />

        <ThemedInputField
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          accessibilityLabel="Enter your email address"
        />

        <ThemedInputField
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          keyboardType="default"
          secureTextEntry
          accessibilityLabel="Enter your password"
        />

        <ThemedInputField
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          keyboardType="default"
          secureTextEntry
          accessibilityLabel="Confirm your password"
        />

        <ThemedButton
          title="Register"
          onPress={handleRegister}
          accessibilityLabel='Registrarse'
        />

        <TouchableOpacity
          className="w-full items-center mt-4"
          onPress={() => Alert.alert('Login', 'Redirect to login page.')}
        >
          <Text className="text-secondary dark:text-secondary-dark underline">
            Already have an account? Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterForm;