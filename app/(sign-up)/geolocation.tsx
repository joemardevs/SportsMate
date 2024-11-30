import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import CustomButton from "@/components/CustomButton";

const GeolocationSignUpScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-secondary p-4 flex justify-center items-center">
      <View className="flex-1 w-full flex justify-center items-center">
        <Text className="text-2xl text-white font-sfbold">Geolocation</Text>
      </View>

      <CustomButton
        handlePress={() => router.navigate("/(sign-up)/account-setup")}
        title="Allow"
        containerStyles="w-full rounded-full"
      />
    </SafeAreaView>
  );
};

export default GeolocationSignUpScreen;
