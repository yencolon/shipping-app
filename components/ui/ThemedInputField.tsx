import React from "react";
import { TextInput } from "react-native";

interface ThemedInputFieldProps extends React.ComponentProps<typeof TextInput> {

}

export default function ThemedInputField(props: ThemedInputFieldProps) {
  return (
    <TextInput
      className="p-5 m-2 rounded-md w-11/12 border"
      placeholderTextColor="#999"
      {...props}
    />
  )
};