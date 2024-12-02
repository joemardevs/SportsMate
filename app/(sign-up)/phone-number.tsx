import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Next from "@/components/AccountSetupScreen/components/Next";
import Previous from "@/components/AccountSetupScreen/components/Previous";
import { Entypo } from "@expo/vector-icons";
import PhoneNumberInput from "@/components/PhoneNumberInput";

const PhoneNumberSignUpScreen = () => {
  const [countryCode, setCountryCode] = useState<string>("44");
  const [phoneNumber, setphoneNumber] = useState<string>("");
  return (
    <SafeAreaView className="flex-1 bg-secondary p-4">
      <View className="self-start">
        <Previous onPress={() => router.back()} />
      </View>
      <View className="flex-1 max-w-full mt-4">
        <View className="flex-1">
          <Text className="text-2xl text-white font-sfmedium">
            Your phone number?
          </Text>

          <Text className="text-base text-white font-sfregular mt-4">
            We protect out community by making {"\n"}
            sure everyone on the dating app actually exists.
          </Text>

          <PhoneNumberInput
            title=""
            value={phoneNumber}
            placeholder="Enter your phone number"
            countryCodeValue={code => setCountryCode(code)}
            otherStyles="mt-4"
            handleChangeText={text => setphoneNumber(text)}
          />
        </View>

        <View className="flex flex-row items-center">
          <View className="p-4">
            <Entypo name="lock" size={24} color="white" />
          </View>
          <View className="flex-1">
            <Text className="text-sm text-white font-sfregular">
              We never share this with anyone and it will not display on your
              profile.
            </Text>
          </View>
        </View>
      </View>

      <View className="self-end">
        <Next
          onPress={() =>
            router.navigate({
              pathname: "/(sign-up)/verify-phone-number",
              params: {
                phoneNumber,
                countryCode,
              },
            })
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default PhoneNumberSignUpScreen;
