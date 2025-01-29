import ThemedButton from '@/components/ui/ThemedButton';
import ThemedInputField from '@/components/ui/ThemedInputField';
import { Link, Stack, router } from 'expo-router';
import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useForm, Controller } from 'react-hook-form';
import ThemedStackBar from '@/components/ui/ThemedStackBar';

interface FormData {
  email: string;
  password: string;
}

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const backIcon = Platform.OS === 'ios' ? 'chevron-back' : 'arrow-back-sharp';

  const onSubmit = (data: FormData) => {
    console.log('Logging in with:', data);
    Alert.alert('Success', 'Logged in successfully!');
  };

  return (
    <SafeAreaView className='flex-1'>
      <View className='flex-1 justify-start items-center'>
        <ThemedStackBar title='Iniciar Sesión' />
        <View className='w-full space-y-5 items-center'>
          <Controller
            control={control}
            rules={{
              required: 'Correo es requerido',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Correo inválido',
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <ThemedInputField
                title='Correo'
                placeholder='Correo'
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                keyboardType='email-address'
                accessibilityLabel='Introduce tu correo'
                icon='mail'
                error={errors.email?.message}
              />
            )}
            name='email'
            defaultValue=''
          />
          <Controller
            control={control}
            rules={{
              required: 'Contraseña es requerida',
              minLength: {
                value: 6,
                message: 'La contraseña debe tener al menos 6 caracteres',
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <ThemedInputField
                title='Contraseña'
                placeholder='Contraseña'
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                secureTextEntry
                accessibilityLabel='Introduce tu contraseña'
                icon='lock-closed'
                error={errors.password?.message}
              />
            )}
            name='password'
            defaultValue=''
          />
          <Link href='/recover' asChild>
            <TouchableOpacity className='items-end w-11/12'>
              <Text className='text-secondary underline'>¿Olvidaste tu contraseña?</Text>
            </TouchableOpacity>
          </Link>
        </View>
        <View className='w-full space-y-4 items-center mt-10'>
          <ThemedButton
            title='Entrar'
            onPress={handleSubmit(onSubmit)}
            accessibilityLabel='Entrar'
          />
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
