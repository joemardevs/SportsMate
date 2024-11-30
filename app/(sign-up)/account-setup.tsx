import BirthdayAccountSetup from "@/components/AccountSetupScreen/birthday";
import ExpectationsInAccountSetup from "@/components/AccountSetupScreen/expectations";
import GenderAccountSetup from "@/components/AccountSetupScreen/gender";
import InterestedInAccountSetup from "@/components/AccountSetupScreen/interested-in";
import NameAccountSetup from "@/components/AccountSetupScreen/name";
import PhotoAccountSetup from "@/components/AccountSetupScreen/photo";
import SportsAccountSetup from "@/components/AccountSetupScreen/sports";
import TeamAccountSetup from "@/components/AccountSetupScreen/team";
import ProgressBar from "@/components/ProgressBar";
import { router } from "expo-router";
import React, { cloneElement, useState } from "react";
import { SafeAreaView, View } from "react-native";

export type AccountSetupProps = {
  onNext: () => void;
  onPrevious: () => void;
  isContinueButtonDisabled: boolean;
};

const STEPS = [
  {
    id: "photo",
    component: (
      <PhotoAccountSetup
        onNext={() => {}}
        onPrevious={() => {}}
        isContinueButtonDisabled={false}
      />
    ),
  },
  {
    id: "name",
    component: (
      <NameAccountSetup
        onNext={() => {}}
        onPrevious={() => {}}
        isContinueButtonDisabled={false}
      />
    ),
  },
  {
    id: "birthday",
    component: (
      <BirthdayAccountSetup
        onNext={() => {}}
        onPrevious={() => {}}
        isContinueButtonDisabled={false}
      />
    ),
  },
  {
    id: "gender",
    component: (
      <GenderAccountSetup
        onNext={() => {}}
        onPrevious={() => {}}
        isContinueButtonDisabled={false}
      />
    ),
  },
  {
    id: "interested-in",
    component: (
      <InterestedInAccountSetup
        onNext={() => {}}
        onPrevious={() => {}}
        isContinueButtonDisabled={false}
      />
    ),
  },
  {
    id: "expectations",
    component: (
      <ExpectationsInAccountSetup
        onNext={() => {}}
        onPrevious={() => {}}
        isContinueButtonDisabled={false}
      />
    ),
  },
  {
    id: "sports",
    component: (
      <SportsAccountSetup
        onNext={() => {}}
        onPrevious={() => {}}
        isContinueButtonDisabled={false}
      />
    ),
  },
  {
    id: "team",
    component: (
      <TeamAccountSetup
        onNext={() => {}}
        onPrevious={() => {}}
        isContinueButtonDisabled={false}
      />
    ),
  },
];

const AccountSetupSignUpScreen = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const handleNextStep = () => {
    // if the user is on the last step, submit the form
    if (activeStepIndex === STEPS.length - 1) {
      console.log("Submit the form");
      //TODO: Submit the form
    }

    setActiveStepIndex(prevIndex => Math.min(prevIndex + 1, STEPS.length - 1));
  };

  const handlePreviousStep = () => {
    //if the user is on the first step, do go back
    if (activeStepIndex === 0) {
      return router.back();
    }

    setActiveStepIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  const currentStep = STEPS[activeStepIndex];

  return (
    <SafeAreaView className="flex-1 bg-secondary p-4 justify-center items-center">
      {/* Progress Bar */}
      <ProgressBar
        currentStep={activeStepIndex + 1}
        totalSteps={STEPS.length}
      />

      {/* Step Component */}
      <View className="flex-1 justify-center items-center mt-8">
        {cloneElement(currentStep.component, {
          onNext: handleNextStep,
          onPrevious: handlePreviousStep,
          isContinueButtonDisabled: false,
        })}
      </View>
    </SafeAreaView>
  );
};

export default AccountSetupSignUpScreen;
