import { View, Text, Pressable } from "react-native";
import React from "react";
import { AccountSetupProps } from "@/app/(sign-up)/account-setup";
import AccountSetupContainer from "./components/AccountSetupContainer";
import { Entypo } from "@expo/vector-icons";

const PhotoAccountSetup = ({
  onNext,
  isContinueButtonDisabled,
}: AccountSetupProps) => {
  return (
    <AccountSetupContainer
      onNext={onNext}
      isContinueButtonDisabled={isContinueButtonDisabled}>
      <View className="flex-1">
        <Text className="text-2xl text-white font-sfmedium">
          Add your photo(s)
        </Text>

        <Text className="text-base text-white font-sfregular mt-4">
          Show off your best smiles! You can modify them later.
        </Text>

        <View className="flex flex-row justify-between mt-4">
          {[1, 2].map((_, index) => (
            <Pressable
              key={index}
              className="bg-gray-200 rounded-xl h-44 w-44 flex justify-center items-center"
              onPress={() => console.log("Add photo." + (index + 1))}>
              <Entypo name="plus" size={32} color="gray" />
            </Pressable>
          ))}
        </View>
      </View>
    </AccountSetupContainer>
  );
};

export default PhotoAccountSetup;
