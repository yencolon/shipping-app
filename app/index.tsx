import { useSession } from '@/context';
import { Redirect } from 'expo-router';
import React from 'react';

export default function App() {
  return <Redirect href='/(main)/profile' />;
}
