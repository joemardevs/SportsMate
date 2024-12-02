import { View, Text, SafeAreaView } from "react-native";
import React from "react";

const DashboardScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text className="text-black">Dashboard</Text>
      </View>
    </SafeAreaView>
  );
};

export default DashboardScreen;
