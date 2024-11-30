import React from "react";
import { View, StyleSheet } from "react-native";
import Previous from "./Previous";
import Next from "./Next";
import CustomButton from "@/components/CustomButton";

// Define props for the AccountSetupContainer component
interface AccountSetupContainerProps {
  onNext: () => void;
  onPrevious: () => void;
  children: React.ReactNode;
  isContinueButtonDisabled: boolean;
}

const AccountSetupContainer: React.FC<AccountSetupContainerProps> = ({
  onNext,
  onPrevious,
  children,
  isContinueButtonDisabled,
}) => {
  return (
    <View className="flex-1 flex justify-center items-center">
      <View className="absolute -top-4 left-0">
        <Previous onPress={onPrevious} />
      </View>
      {/* Render the content passed via children */}
      {children}

      {/* Buttons container */}
      <View style={styles.buttonsContainer}>
        <CustomButton
          title="Continue"
          handlePress={onNext}
          containerStyles="w-full rounded-full"
          isDisabled={isContinueButtonDisabled}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
});

export default AccountSetupContainer;
