import React from 'react';
import { TextInput, Text, View, TextInputProps } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ThemedInputFieldProps extends TextInputProps {
  icon?: React.ComponentProps<typeof Ionicons>['name'];
  title?: string;
  error?: string;
}

const ThemedInputField: React.FC<ThemedInputFieldProps> = ({
  icon = 'person-add',
  title = 'Field',
  error,
  ...props
}) => {
  return (
    <View className='w-11/12 mt-2'>
      <Text className='text-md font-bold'>{title}</Text>
      <View
        className={`flex-row rounded-md border ${error ? 'border-red-500' : 'border-gray-300'}`}>
        <View className='flex justify-center items-center w-1/12'>
          <Ionicons name={icon} size={20} color={error ? 'red' : 'black'} />
        </View>
        <TextInput
          className='w-11/12 pt-5 pb-5'
          placeholderTextColor='#999'
          accessible
          accessibilityLabel={title}
          {...props}
        />
      </View>
      {error && <Text className='text-red-500 mt-1'>{error}</Text>}
    </View>
  );
};

export default ThemedInputField;
