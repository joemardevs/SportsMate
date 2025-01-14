import { View, Text, SafeAreaView, Platform, StatusBar } from "react-native";
import React from "react";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

const ChatScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        className="flex flex-row items-center justify-between px-2 py-4 rounded-b-[30px] bg-secondary "
        style={{
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 70,
        }}>
        <View className="bg-white p-2 rounded-full">
          <Feather name="search" size={32} color="#f0566a" />
        </View>
        <Text className="text-white text-xl font-bold">Chat</Text>
        <View className="bg-primary p-2 rounded-full">
          <MaterialCommunityIcons name="pencil" size={32} color="white" />
        </View>
      </View>

      <SafeAreaView className="flex-1 bg-white">
        <View className="flex-1 w-full flex justify-center items-center">
          <Text className="text-black text-2xl font-bold">Chat Screen</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ChatScreen;
