import { forwardRef } from 'react';
import { Button, GestureResponderEvent, Pressable, Text, View } from 'react-native';

interface ThemedButtonProps extends React.ComponentProps<typeof Button> {
  className?: string;
  textClassName?: string;
}

const ThemedButton = forwardRef<View, ThemedButtonProps>((props, ref) => {
  const { accessibilityLabel, className, textClassName, title, onPress } = props;

  return (
    <Pressable
      ref={ref}
      onPress={onPress}
      className={`p-5 rounded-md w-11/12 bg-blue-400 ${className}`}
      accessibilityLabel={accessibilityLabel}>
      <Text className={`text-center font-bold text-white ${textClassName}`}>{title}</Text>
    </Pressable>
  );
});

export default ThemedButton;
