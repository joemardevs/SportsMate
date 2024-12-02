import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const ExploreScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient colors={["#ef556c", "#dcb1b8"]} style={{ flex: 1 }}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text className="text-white">Explore</Text>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default ExploreScreen;
