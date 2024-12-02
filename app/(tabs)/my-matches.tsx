import { View, Text, SafeAreaView } from "react-native";
import React from "react";

const MyMatchesScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text className="text-black">My Matches</Text>
      </View>
    </SafeAreaView>
  );
};

export default MyMatchesScreen;
