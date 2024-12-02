import { View, Text, Pressable } from "react-native";
import React from "react";
import { Ionicons, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { Tabs, useTabsStore } from "@/zustand/tabs.store";
import { Href, router } from "expo-router";

const TABS = [
  {
    id: "dashboard",
    title: "Dashboard",
    route: "/(tabs)/dashboard",
    icon: ({ focused }: { focused: boolean }) => (
      <MaterialCommunityIcons
        name="view-dashboard"
        size={24}
        color={focused ? "#f0566a" : "#FFF"}
      />
    ),
  },
  {
    id: "explore",
    title: "Explore",
    route: "/(tabs)/explore",
    icon: ({ focused }: { focused: boolean }) => (
      <Octicons name="search" size={24} color={focused ? "#f0566a" : "#FFF"} />
    ),
  },
  {
    id: "my-matches",
    title: "My Matches",
    route: "/(tabs)/my-matches",
    icon: ({ focused }: { focused: boolean }) => (
      <MaterialCommunityIcons
        name="heart-multiple-outline"
        size={24}
        color={focused ? "#f0566a" : "#FFF"}
      />
    ),
  },
  {
    id: "chat",
    title: "Chat",
    route: "/(tabs)/chat",
    icon: ({ focused }: { focused: boolean }) => (
      <Ionicons
        name="chatbubble-outline"
        size={24}
        color={focused ? "#f0566a" : "#FFF"}
      />
    ),
  },
] as const;

const TabBar = () => {
  const activeTab = useTabsStore(({ activeTab }) => activeTab);
  const setActiveTab = useTabsStore(({ setActiveTab }) => setActiveTab);

  const onTabPress = (tab: Tabs, route: Href) => {
    setActiveTab(tab);
    router.navigate(route);
  };

  return (
    <View className="flex flex-row px-2 py-4 rounded-t-[30px] bg-secondary self-center absolute bottom-0">
      {TABS.map(tab => (
        <Pressable
          key={tab.id}
          className="flex-1 flex justify-center items-center"
          onPress={() => onTabPress(tab.id, tab.route)}>
          {tab.icon && <tab.icon focused={activeTab === tab.id} />}
          <Text
            className={`text-xs mt-2 ${
              activeTab === tab.id ? "text-primary" : "text-white"
            }`}>
            {tab.title}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default TabBar;
