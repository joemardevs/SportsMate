import { View, Text } from "react-native";
import React from "react";
import { AccountSetupProps } from "@/app/(sign-up)/account-setup";
import AccountSetupContainer from "./components/AccountSetupContainer";
import DateInput from "../DateInput";
import { Entypo } from "@expo/vector-icons";

const BirthdayAccountSetup = ({
  onNext,
  isContinueButtonDisabled,
}: AccountSetupProps) => {
  const onChangeDate = ({
    day,
    month,
    year,
  }: {
    day: string;
    month: { id: number; name: string };
    year: string;
  }) => {
    console.log(day, month, year);
  };

  return (
    <AccountSetupContainer
      onNext={onNext}
      isContinueButtonDisabled={isContinueButtonDisabled}>
      <View className="flex-1">
        <Text className="text-2xl text-white font-sfmedium">
          When is your birthday?
        </Text>

        <DateInput
          handleChangeDate={({ day, month, year }) =>
            onChangeDate({
              day,
              month,
              year,
            })
          }
        />
      </View>

      <View className="flex flex-row items-center mb-4">
        <View className="p-4">
          <Entypo name="lock" size={24} color="white" />
        </View>
        <View className="flex-1">
          <Text className="text-sm text-white font-sfregular">
            We will only show you age on your profile. Not the birthday
          </Text>
        </View>
      </View>
    </AccountSetupContainer>
  );
};

export default BirthdayAccountSetup;
