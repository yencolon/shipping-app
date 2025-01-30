import ThemedButton from '@/components/ui/ThemedButton';
import ThemedInputField from '@/components/ui/ThemedInputField';
import { Link } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useForm, Controller } from 'react-hook-form';
import ThemedStackBar from '@/components/ui/ThemedStackBar';

interface FormData {
  email: string;
}

const RecoverForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Recovering account for:', data.email);
    Alert.alert('Success', 'Recovery email sent!');
  };

  return (
    <SafeAreaView className='flex-1'>
      <View className='flex-1 justify-start items-center'>
        <ThemedStackBar title='Recuperar Cuenta' />
        <Text className='font-bold text-5xl text-primary dark:text-primary-dark'>
          Lorem ipsum dolor sit amet
        </Text>
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
                placeholder='Ingresa tu correo'
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                keyboardType='email-address'
                accessibilityLabel='Introduce tu correo'
                icon='mail-outline'
                error={errors.email?.message}
              />
            )}
            name='email'
            defaultValue=''
          />
        </View>
        <View className='w-full space-y-4 items-center mt-10'>
          <ThemedButton
            title='Enviar'
            onPress={handleSubmit(onSubmit)}
            accessibilityLabel='Enviar'
          />
          <Link href='/login' asChild>
            <TouchableOpacity className='w-full items-center mt-4'>
              <Text className='text-secondary underline'>¿Ya tienes una cuenta? Inicia sesión</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RecoverForm;
