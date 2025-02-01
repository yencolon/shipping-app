import { forwardRef } from 'react';
import { Button, GestureResponderEvent, Pressable, Text, View } from 'react-native';

interface ThemedButtonProps extends React.ComponentProps<typeof Button> {
  className?: string;
  variant?: 'primary' | 'secondary';
}

const ThemedButton = forwardRef<View, ThemedButtonProps>((props, ref) => {
  const { accessibilityLabel, className, title, onPress, variant } = props;

  return (
    <Pressable
      ref={ref}
      onPress={onPress}
      className={`p-5 m-2 rounded-md w-11/12  ${className}`}
      accessibilityLabel={accessibilityLabel}>
      <Text className={`text-center font-bold text-white`}>{title}</Text>
    </Pressable>
  );
});

export default ThemedButton;
