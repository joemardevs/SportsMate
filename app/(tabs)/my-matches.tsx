import { View, Text, SafeAreaView, Platform, StatusBar } from "react-native";
import React from "react";

const MyMatchesScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        className="flex flex-row items-center justify-center px-2 py-4 rounded-b-[30px] bg-secondary "
        style={{
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 70,
        }}>
        <Text className="text-white text-xl font-bold">My Matches</Text>
      </View>

      <SafeAreaView className="flex-1 bg-white">
        <View className="flex-1 w-full flex justify-center items-center">
          <Text className="text-black text-2xl font-bold">
            My Matches Screen
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default MyMatchesScreen;
