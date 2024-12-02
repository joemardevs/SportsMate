import React from "react";
import { Tabs } from "expo-router";
import TabBar from "@/components/TabBar";

const TabsLayout = () => {
  return (
    <Tabs
      tabBar={() => <TabBar />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen name="dashboard" />
      <Tabs.Screen name="explore" />
      <Tabs.Screen name="my-matches" />
      <Tabs.Screen name="chat" />
    </Tabs>
  );
};

export default TabsLayout;
