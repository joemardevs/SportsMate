import { View, Text, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useGlobalSearchParams } from "expo-router";
import Next from "@/components/AccountSetupScreen/components/Next";
import Previous from "@/components/AccountSetupScreen/components/Previous";
import { Entypo } from "@expo/vector-icons";
import OTPInput from "@/components/OTPInput";

const VerifyPhoneNumberSignUpScreen = () => {
  const { phoneNumber = "1234567", countryCode = "44" } =
    useGlobalSearchParams();

  return (
    <SafeAreaView className="flex-1 bg-secondary p-4">
      <View className="self-start">
        <Previous onPress={() => router.back()} />
      </View>
      <View className="flex-1 max-w-full mt-4">
        <View className="flex-1">
          <Text className="text-2xl text-white font-sfmedium">
            Verify your phone number
          </Text>

          <Text className="text-base text-white font-sfregular mt-4">
            Enter the code we sent you to {"\n"} +{countryCode} {phoneNumber}
          </Text>

          <OTPInput
            value={["", "", "", "", "", ""]}
            length={5}
            onChangeValue={text => console.log("Verification code:", text)}
          />

          <Pressable
            accessibilityLabel="resend-code"
            onPress={() => console.log("Resend code.")}>
            <Text className="text-sm text-white underline font-sfbold mt-10 text-center">
              Send again
            </Text>
          </Pressable>
        </View>

        <View className="flex flex-row items-center">
          <View className="flex-1">
            <Text className="text-sm text-white font-sfregular">
              This message will arrive in the next 30s.
            </Text>
          </View>
        </View>
      </View>

      <View className="self-end">
        <Next onPress={() => router.navigate("/(sign-up)/geolocation")} />
      </View>
    </SafeAreaView>
  );
};

export default VerifyPhoneNumberSignUpScreen;
