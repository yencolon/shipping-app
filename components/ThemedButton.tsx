import { forwardRef } from 'react';
import { Button, GestureResponderEvent, Pressable, Text, View } from 'react-native';

interface ThemedButtonProps extends React.ComponentProps<typeof Button> {
  className?: string;
  variant?: 'primary' | 'secondary';
}

const ThemedButton = forwardRef<View, ThemedButtonProps>((props, ref) => {
  const { accessibilityLabel, className, title, onPress, variant } = props;

  const color = variant === 'secondary' ? 'bg-blue-200' : 'bg-blue-300';
  const textColor = variant === 'secondary' ? 'text-blue-600' : 'text-blue-600';

  return (
    <Pressable
      ref={ref}
      onPress={onPress}
      className={`p-5 m-2 rounded-md w-11/12 ${color} ${className}`}
      accessibilityLabel={accessibilityLabel}>
      <Text className={`text-center font-bold ${textColor}`}>{title}</Text>
    </Pressable>
  );
});

export default ThemedButton;
