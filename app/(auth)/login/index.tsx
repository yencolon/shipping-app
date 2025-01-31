import ThemedButton from '@/components/ui/ThemedButton';
import ThemedInputField from '@/components/ui/ThemedInputField';
import ThemedStackBar from '@/components/ui/ThemedStackBar';
import { Link, router } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import loginSchema, { LoginSchemaType } from '@/schemas/loginSchema';
import { useSession } from '@/context';

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchemaType>({
    resolver: yupResolver(loginSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const { login } = useSession();

  const onSubmit = async (data: LoginSchemaType) => {
    try {
      console.log('Logging in with:', data);
      // Simulate API call
      if (login) {
        await login(data);
        router.replace('/(main)');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again.');
    }
  };

  return (
    <SafeAreaView className='flex-1'>
      <View className='flex-1 justify-start items-center'>
        <ThemedStackBar title='Iniciar Sesión' />
        <View className='w-full space-y-5 items-center'>
          <Controller
            control={control}
            name='email'
            defaultValue='mail@mail.com'
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
          />
          <Controller
            control={control}
            name='password'
            defaultValue='12345678'
            render={({ field: { onChange, onBlur, value } }) => (
              <ThemedInputField
                title='Contraseña'
                placeholder='Ingresa tu contraseña'
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                secureTextEntry
                accessibilityLabel='Introduce tu contraseña'
                icon='lock-closed-outline'
                error={errors.password?.message}
              />
            )}
          />
        </View>
        <View className='w-full space-y-4 items-center'>
          <ThemedButton
            title={isSubmitting ? 'Entrando...' : 'Entrar'}
            onPress={handleSubmit(onSubmit)}
            accessibilityLabel='Entrar'
            disabled={isSubmitting}
          />
          <Link href='/recover' asChild>
            <TouchableOpacity className='items-end w-11/12'>
              <Text className='text-secondary underline'>¿Olvidaste tu contraseña?</Text>
            </TouchableOpacity>
          </Link>
          <Link href='/register' asChild>
            <TouchableOpacity className='w-full items-center mt-4'>
              <Text className='text-secondary underline'>¿No tienes cuenta? Crea una</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginForm;
