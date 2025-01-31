import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';
import { useSession } from '@/context';

export default function Layout() {
  const colorScheme = useColorScheme();
  const { session } = useSession();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Productos',
          tabBarIcon: ({ color }) => <Ionicons size={28} name='home-outline' color={color} />,
        }}
      />
      <Tabs.Screen
        name='cart/index'
        options={{
          title: 'Carrito',
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons size={28} name='cart-outline' color={color} />,
        }}
      />
      <Tabs.Screen
        name='profile/index'
        options={{
          title: 'Perfil',
          href: session.authData ? '/' : '/(auth)',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name='person-circle-outline' color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
