import { Stack } from "expo-router";
import React from "react";

const SignUpLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="account-setup" />
      <Stack.Screen name="phone-number" />
      <Stack.Screen name="verify-phone-number" />
      <Stack.Screen name="geolocation" />
    </Stack>
  );
};

export default SignUpLayout;
