import { useSession } from '@/context';
import { Ionicons } from '@expo/vector-icons';
import { Link, Redirect } from 'expo-router';
import React from 'react';
import { Alert, View, Text } from 'react-native';

export default function User() {
  const { session, logout } = useSession();

  if (!session.authData) {
    return <Redirect href='/(main)' />;
  }

  const handleSignOut = async () => {
    try {
      if (logout) {
        await logout();
      }
    } catch (error) {
      Alert.alert('Error', 'Unable to sign out. Please try again.');
    }
  };

  return (
    <View className='mb-6 flex-1'>
      <Text className='text-lg font-bold mb-4'>AJUSTES</Text>
      <View className='space-y-2'>
        <View className='flex flex-row justify-start items-center'>
          <Ionicons name='document-outline' size={24} color='black' />
          <Link href='/'>
            <Text className='text-link font-semibold'>Términos y condiciones</Text>
          </Link>
        </View>

        <View className='flex flex-row justify-start items-center'>
          <Ionicons name='document-outline' size={24} color='black' />
          <Link href='/'>
            <Text className='text-link font-semibold'>Política de Privacidad</Text>
          </Link>
        </View>

        <View className='flex flex-row justify-start items-center'>
          <Ionicons name='close-circle-outline' size={24} color='black' />
          <Link href='/'>
            <Text className='text-link font-semibold'>Eliminar cuenta</Text>
          </Link>
        </View>
      </View>
    </View>
  );
}
