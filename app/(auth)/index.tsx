import { Link } from "expo-router";
import React from "react";
import { Button } from "react-native";

export default function Auth() {
  return (
    <div>
      <h1>Auth</h1>
      <Link href="/login">
        <Button title="login" />
      </Link>
      <Link href="/register">
        <Button title="register" />
      </Link>
    </div>
  );
}