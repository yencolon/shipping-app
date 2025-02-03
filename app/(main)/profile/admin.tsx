import React from 'react';
import { Switch, Text, View } from 'react-native';

export default function Admin() {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View className='flex-1 p-4'>
      <View className='flex flex-row justify-between items-center'>
        <Text className='text-default'>Enable</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor='#3e3e3e'
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
}
