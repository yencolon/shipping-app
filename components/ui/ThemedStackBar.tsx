import { Ionicons } from '@expo/vector-icons';
import { router, Stack } from 'expo-router';
import { Platform } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface ThemedStackBarProps {
  title: string;
  noBack?: boolean;
}

export default function ThemedStackBar({ title = '', noBack = false }: ThemedStackBarProps) {
  const backIcon = Platform.OS === 'ios' ? 'chevron-back' : 'arrow-back-sharp';
  return (
    <Stack.Screen
      options={{
        title: title,
        headerShown: true,
        headerStyle: { backgroundColor: Colors.light.background },
        headerTintColor: Colors.light.tint,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: () => {
          if (noBack) {
            return null;
          }

          return (
            <Ionicons
              name={backIcon}
              size={25}
              color={Colors.light.text}
              onPress={() => router.back()}
            />
          );
        },
      }}
    />
  );
}
