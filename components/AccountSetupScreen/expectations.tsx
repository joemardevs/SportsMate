import { View, Text } from "react-native";
import React from "react";
import { AccountSetupProps } from "@/app/(sign-up)/account-setup";
import AccountSetupContainer from "./components/AccountSetupContainer";

const DATA = [
  "Passionate about Sports",
  "Vacation",
  "Romance",
  "Chat",
  "Friends first",
  "Casual dating",
  "Start a family",
  "Secret meetings",
  "Sport-buddy",
  "Competitive",
  "Active Partner",
  "Long term relationship",
];

const ExpectationsInAccountSetup = ({
  onNext,
  isContinueButtonDisabled,
}: AccountSetupProps) => {
  return (
    <AccountSetupContainer
      onNext={onNext}
      isContinueButtonDisabled={isContinueButtonDisabled}>
      <View className="flex-1">
        <Text className="text-2xl text-white font-sfmedium">
          What are your expectations?
        </Text>

        <View className="flex flex-col flex-wrap gap-4 mt-6 h-[50%]">
          {DATA.map(data => (
            <View
              key={data}
              className="flex flex-row items-center justify-center w-[45%] h-10 bg-white rounded-xl">
              <Text className="text-sm text-black font-sfregular text-center">
                {data}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </AccountSetupContainer>
  );
};

export default ExpectationsInAccountSetup;
