import ThemedButton from '@/components/ui/ThemedButton';
import ThemedInputField from '@/components/ui/ThemedInputField';
import ThemedStackBar from '@/components/ui/ThemedStackBar';
import { Link, router } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useForm, Controller } from 'react-hook-form';
import { Ionicons } from '@expo/vector-icons';

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
}

const RegisterForm = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const onSubmit = async (data: FormData) => {
    try {
      console.log('Registering with:', data);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      Alert.alert('Success', 'Registered successfully!');
      router.push('/login');
    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again.');
    }
  };

  const password = watch('password');

  return (
    <SafeAreaView className='flex-1'>
      <View className='flex-1 justify-between items-center'>
        <ThemedStackBar title='Registro' />

        <View className='w-full space-y-10 items-center'>
          <Controller
            control={control}
            rules={{
              required: 'Nombre es requerido',
              minLength: {
                value: 2,
                message: 'El nombre debe tener al menos 2 caracteres',
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <ThemedInputField
                title='Nombre completo'
                placeholder='Ejemplo: María Pérez'
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                keyboardType='default'
                accessibilityLabel='Ingresa tu nombre aquí'
                icon='person-circle'
                error={errors.name?.message}
              />
            )}
            name='name'
            defaultValue=''
          />

          <Controller
            control={control}
            rules={{
              required: 'Correo electrónico es requerido',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Correo inválido',
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <ThemedInputField
                title='Correo electrónico'
                placeholder='Ejemplo: maria@correo.com'
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                keyboardType='email-address'
                accessibilityLabel='Ingresa tu correo electrónico'
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
                placeholder='Ingresa una contraseña'
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                keyboardType='default'
                secureTextEntry
                accessibilityLabel='Ingresa una contraseña'
                icon='lock-closed'
                error={errors.password?.message}
              />
            )}
            name='password'
            defaultValue=''
          />

          <Controller
            control={control}
            rules={{
              required: 'Confirmar contraseña es requerido',
              validate: (value) => value === password || 'Las contraseñas no coinciden',
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <ThemedInputField
                title='Confirmar Contraseña'
                placeholder='Confirma tu contraseña'
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                keyboardType='default'
                secureTextEntry
                accessibilityLabel='Confirma tu contraseña'
                icon='lock-closed'
                error={errors.confirmPassword?.message}
              />
            )}
            name='confirmPassword'
            defaultValue=''
          />

          <Controller
            control={control}
            rules={{
              required: 'Teléfono es requerido',
              pattern: {
                value: /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
                message: 'Teléfono inválido',
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <ThemedInputField
                title='Teléfono'
                placeholder='Ejemplo: (412) 552 36 14'
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                keyboardType='phone-pad'
                accessibilityLabel='Ingresa tu teléfono'
                icon='call'
                error={errors.phone?.message}
              />
            )}
            name='phone'
            defaultValue=''
          />
        </View>

        <View className='w-full space-y-10 items-center px-4'>
          <ThemedButton
            title={isSubmitting ? 'Creando cuenta...' : 'Crear cuenta'}
            onPress={handleSubmit(onSubmit)}
            accessibilityLabel='Crear una cuenta'
            disabled={isSubmitting}
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

export default RegisterForm;
