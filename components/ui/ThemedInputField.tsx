import { TextInput, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
interface ThemedInputFieldProps extends React.ComponentProps<typeof TextInput> {
  icon?: React.ComponentProps<typeof Ionicons>['name'];
  title?: string;
}

export default function ThemedInputField(props: ThemedInputFieldProps) {
  const { icon = 'person-add', title = 'Field' } = props;

  return (
    <View className='w-11/12'>
      <Text className='text-lg font-normal'>{title}</Text>
      <View className='flex-row mt-2 rounded-md border'>
        <View className='flex justify-center items-center w-1/12 '>
          <Ionicons name={icon} size={20} color='black' />
        </View>
        <TextInput className='w-11/12 p-5' placeholderTextColor='#999' {...props} />
      </View>
    </View>
  );
}
