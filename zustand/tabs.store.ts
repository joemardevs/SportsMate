import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type Tabs = "dashboard" | "explore" | "my-matches" | "chat";

type TabsStore = {
  activeTab: Tabs;
  setActiveTab: (tab: Tabs) => void;
};

export const useTabsStore = create<TabsStore>()(
  persist(
    set => ({
      activeTab: "dashboard",
      setActiveTab: tab => set({ activeTab: tab }),
    }),
    {
      name: "tabs-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
