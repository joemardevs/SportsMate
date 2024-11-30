import { View, Text, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Next from "@/components/AccountSetupScreen/components/Next";

const PhoneNumberSignUpScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-secondary p-4 flex justify-center items-center">
      <View className="flex-1 w-full flex justify-center items-center">
        <Text className="text-2xl text-white font-sfbold">Phone Number</Text>
      </View>

      <View className="self-end">
        <Next
          onPress={() => router.navigate("/(sign-up)/verify-phone-number")}
        />
      </View>
    </SafeAreaView>
  );
};

export default PhoneNumberSignUpScreen;
