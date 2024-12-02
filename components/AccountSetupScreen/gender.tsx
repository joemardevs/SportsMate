import { View, Text } from "react-native";
import React from "react";
import { AccountSetupProps } from "@/app/(sign-up)/account-setup";
import AccountSetupContainer from "./components/AccountSetupContainer";

const OPTIONS = [
  {
    label: "Male",
    value: "male",
  },
  {
    label: "Female",
    value: "female",
  },
  {
    label: "Other",
    value: "other",
  },
  {
    label: "Prefer not to say",
    value: "prefer not to say",
  },
];

const GenderAccountSetup = ({
  onNext,
  isContinueButtonDisabled,
}: AccountSetupProps) => {
  return (
    <AccountSetupContainer
      onNext={onNext}
      isContinueButtonDisabled={isContinueButtonDisabled}>
      <View className="flex-1">
        <Text className="text-2xl text-white font-sfmedium">
          How do you identify?
        </Text>

        <Text className="text-base text-white font-sfregular mt-4">
          Everyone is welcome!
        </Text>

        <View className="flex flex-col gap-4 mt-6">
          {OPTIONS.map(option => (
            <View
              key={option.value}
              className="flex flex-row items-center w-1/2">
              <View className="bg-white w-6 h-6 rounded-full mr-4" />
              <View className="px-4 py-2 bg-white w-full rounded-full">
                <Text className="text-base text-black font-sfregular text-center">
                  {option.label}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </AccountSetupContainer>
  );
};

export default GenderAccountSetup;
