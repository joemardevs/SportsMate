import { View, Text } from "react-native";
import React from "react";
import { AccountSetupProps } from "@/app/(sign-up)/account-setup";
import AccountSetupContainer from "./components/AccountSetupContainer";
import Input from "../Input";

const NameAccountSetup = ({
  onNext,
  isContinueButtonDisabled,
}: AccountSetupProps) => {
  return (
    <AccountSetupContainer
      onNext={onNext}
      isContinueButtonDisabled={isContinueButtonDisabled}>
      <View className="flex-1">
        <Text className="text-2xl text-white font-sfmedium">
          What's your name?
        </Text>

        <Input
          title=""
          placeholder="Enter your name"
          containerStyle="mt-4"
          handleChangeText={text => console.log("Name:", text)}
        />
      </View>
    </AccountSetupContainer>
  );
};

export default NameAccountSetup;
