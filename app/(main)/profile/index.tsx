import ThemedButton from '@/components/ThemedButton';
import { useSession } from '@/context';
import { Link, Redirect, router, useFocusEffect } from 'expo-router';
import React, { useEffect } from 'react';
import { Alert, View, Text } from 'react-native';

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
    <View className='flex-1 justify-center items-center'>
      <Text>Profile</Text>
      <ThemedButton
        title='Sign Out'
        onPress={handleSignOut}
        accessibilityLabel='Sign Out of your account'
      />
    </View>
  );
}
