import { View, Text, SafeAreaView, StatusBar, Platform } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const DashboardScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        className="flex flex-row items-center justify-between px-2 py-4 rounded-b-[30px] bg-secondary "
        style={{
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 70,
        }}>
        <Ionicons name="settings-sharp" size={32} color="white" />
        <Text className="text-white text-xl font-bold">Hi John Doe</Text>
        <View className="bg-white p-6 rounded-full" />
      </View>

      <SafeAreaView className="flex-1 bg-white">
        <View className="flex-1 w-full flex justify-center items-center">
          <Text className="text-black text-2xl font-bold">Dashboard</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default DashboardScreen;
