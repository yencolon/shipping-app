import ThemedButton from '@/components/ThemedButton';
import ThemedStackBar from '@/components/ui/ThemedStackBar';
import { useSession } from '@/context';
import { Ionicons } from '@expo/vector-icons';
import { Link, Redirect, router, Slot, Stack } from 'expo-router';
import React, { useEffect } from 'react';
import { Alert, SafeAreaView, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function Layout() {
  const { session, logout } = useSession();
  const userRole = 'admin';

  useEffect(() => {
    if (userRole === 'admin') {
      // router.replace('/profile/admin'); // Redirect to admin-specific route
    } else if (userRole === 'user') {
      //  router.replace('/profile/user'); // Redirect to user-specific route
    }
  }, []);

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
      <View className='flex-1 p-4 pb-20 justify-between'>
        {/* Profile Header */}
        <View>
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
        </View>

        <Slot />

        <View>
          {/* Sign Out Button */}
          <ThemedButton
            title='Cerrar sesión'
            onPress={handleSignOut}
            accessibilityLabel='Cerrar sesión de tu cuenta'
            className='mt-6 !bg-red-500'
          />

          {/* Footer */}
          <View className='mt-8'>
            <Text className='text-center text-sm text-gray-500'>Versión: 1.0.0</Text>
            <Text className='text-center text-sm text-gray-500'> C.A.</Text>
            <Text className='text-center text-sm text-gray-500'>Todos los derechos reservados</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
