import { View, Text } from "react-native";
import React from "react";
import { AccountSetupProps } from "@/app/(sign-up)/account-setup";
import AccountSetupContainer from "./components/AccountSetupContainer";

const SportsAccountSetup = ({
  onNext,
  isContinueButtonDisabled,
}: AccountSetupProps) => {
  return (
    <AccountSetupContainer
      onNext={onNext}
      isContinueButtonDisabled={isContinueButtonDisabled}>
      <View className="flex-1 w-full flex justify-center items-center">
        <Text className="text-2xl text-white font-sfbold">Sports</Text>
      </View>
    </AccountSetupContainer>
  );
};

export default SportsAccountSetup;
