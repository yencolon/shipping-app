import { useSession } from '@/context';
import { Link, Redirect, router, useFocusEffect } from 'expo-router';
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

export default function Profile() {
  const { session } = useSession();

  // useFocusEffect(() => {
  //   if (!session.authData) {
  //     router.push('/(main)');
  //   }
  // });

  if (!session.authData) {
    return <Redirect href='/(main)' />;
  }

  return (
    <View className='flex-1 justify-center items-center'>
      <Text>Profile</Text>
    </View>
  );
}
