import { Link } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

export default function Auth() {
  return (
    <View>
      <Text>Auth</Text>
      <Link href="/login">
        <Button title="login" />
      </Link>
      <Link href="/register">
        <Button title="register" />
      </Link>
    </View>
  );
}