import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { AccountSetupProps } from "@/app/(sign-up)/account-setup";
import AccountSetupContainer from "./components/AccountSetupContainer";
import {
  FontAwesome5,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

const SPORTS = [
  {
    label: "Football",
    icon: <Ionicons name="football" size={36} color="#2b2d34" />,
  },
  {
    label: "Tennis",
    icon: <Ionicons name="tennisball" size={36} color="#2b2d34" />,
  },
  {
    label: "Ruby",
    icon: <Ionicons name="american-football-sharp" size={36} color="#2b2d34" />,
  },
  {
    label: "Baseball",
    icon: <Ionicons name="baseball" size={36} color="#2b2d34" />,
  },
  {
    label: "Martial Arts",
    icon: (
      <MaterialIcons name="sports-martial-arts" size={36} color="#2b2d34" />
    ),
  },
  {
    label: "Running",
    icon: <FontAwesome5 name="running" size={36} color="#2b2d34" />,
  },
  {
    label: "Cycling",
    icon: <Ionicons name="bicycle" size={36} color="#2b2d34" />,
  },
  {
    label: "Weight Lifting",
    icon: (
      <MaterialCommunityIcons name="weight-lifter" size={36} color="#2b2d34" />
    ),
  },
  {
    label: "Climbing",
    icon: <FontAwesome6 name="mountain-sun" size={36} color="#2b2d34" />,
  },
  {
    label: "Basketball",
    icon: <Ionicons name="basketball" size={36} color="#2b2d34" />,
  },
  {
    label: "Golf",
    icon: <Ionicons name="golf" size={36} color="#2b2d34" />,
  },
  {
    label: "Hiking",
    icon: <FontAwesome5 name="hiking" size={36} color="#2b2d34" />,
  },
  {
    label: "Ping pong",
    icon: (
      <FontAwesome6 name="table-tennis-paddle-ball" size={36} color="#2b2d34" />
    ),
  },
  {
    label: "Scuba Diving",
    icon: <MaterialIcons name="scuba-diving" size={36} color="#2b2d34" />,
  },
  {
    label: "Skiing",
    icon: <FontAwesome6 name="person-skiing" size={36} color="#2b2d34" />,
  },
  {
    label: "Surfing",
    icon: <MaterialIcons name="surfing" size={36} color="#2b2d34" />,
  },
  {
    label: "Swimming",
    icon: <FontAwesome6 name="person-swimming" size={36} color="#2b2d34" />,
  },
  {
    label: "Volleyball",
    icon: <FontAwesome6 name="volleyball" size={36} color="#2b2d34" />,
  },
];

const SportsAccountSetup = ({
  onNext,
  isContinueButtonDisabled,
}: AccountSetupProps) => {
  return (
    <AccountSetupContainer
      onNext={onNext}
      isContinueButtonDisabled={isContinueButtonDisabled}>
      <View className="flex-1">
        <Text className="text-2xl text-white font-sfmedium">
          What sports are you interested in?
        </Text>

        <Text className="text-base text-white font-sfregular mt-4">
          Pick up to 5 sports
        </Text>

        <ScrollView
          style={{
            height: "80%",
          }}>
          <View className="flex-1 flex flex-row justify-between flex-wrap gap-4 mt-6">
            {SPORTS.map(sport => (
              <View
                key={sport.label}
                className="bg-white rounded-xl w-[28%] h-[15%] flex flex-col justify-center items-center">
                {sport.icon}
                <Text className="text-base text-secondary font-sfmedium text-center mt-2">
                  {sport.label}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </AccountSetupContainer>
  );
};

export default SportsAccountSetup;
