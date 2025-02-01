import ThemedButton from '@/components/ThemedButton';
import ThemedStackBar from '@/components/ui/ThemedStackBar';
import { Colors } from '@/constants/Colors';
import { useSession } from '@/context';
import { Ionicons } from '@expo/vector-icons';
import { Link, Redirect, router, useFocusEffect } from 'expo-router';
import React, { useEffect } from 'react';
import { Alert, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Profile() {
  const { session, logout } = useSession();

  // useFocusEffect(() => {
  //   if (!session.authData) {
  //     router.push('/(main)');
  //   }
  // });

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
    <SafeAreaView className='flex-1 bg-primary'>
      <View className='flex-1 p-4'>
        {/* Profile Header */}
        <ThemedStackBar title='Perfil' noBack />
        {/* Personal Information Section */}
        <View className='mb-6 flex flex-row items-center'>
          <Ionicons name='person-circle-outline' size={70} color={Colors.light.icon} />
          <View className='space-y-2 grid-rows-3'>
            <Text className='text-defaultSemiBold'>ArtiFex</Text>
            <Text className='text-smaller'>soyunmonoartico.vanuatu@gmail.com</Text>
            <Text className='text-smaller'>0412479-9754</Text>
          </View>
        </View>

        {/* Settings Section */}
        <View className='mb-6'>
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

        {/* Sign Out Button */}
        <ThemedButton
          title='Cerrar sesión'
          onPress={handleSignOut}
          accessibilityLabel='Cerrar sesión de tu cuenta'
          className='mt-6 bg-red-600'
        />

        {/* Footer */}
        <View className='mt-8'>
          <Text className='text-center text-sm text-gray-500'>Versión: 1.0.0</Text>
          <Text className='text-center text-sm text-gray-500'> C.A.</Text>
          <Text className='text-center text-sm text-gray-500'>Todos los derechos reservados</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
