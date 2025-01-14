import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";
import React from "react";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

const ChatScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        className="flex flex-row items-center justify-between px-4 py-4 rounded-b-[30px] bg-secondary "
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
        <ScrollView className="p-4">
          <View className="bg-gray-100 p-4 rounded-2xl">
            <View className="flex flex-row items-center gap-4">
              <View className="bg-primary opacity-50 p-6 rounded-full" />
              <View className="flex-1">
                <Text className="text-black text-lg font-bold">John Doe</Text>
                <Text className="text-gray-500 text-base">
                  Hey! How are you?
                </Text>
              </View>
            </View>

            <Text className="absolute right-2 top-2">13:00</Text>
            <View className="absolute bottom-2 right-2 bg-primary p-2 rounded-full" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default ChatScreen;
