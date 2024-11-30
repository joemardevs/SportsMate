import { Pressable } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

type NextProps = {
  onPress: () => void;
};

const Next = ({ onPress }: NextProps) => {
  return (
    <Pressable onPress={onPress} className="bg-primary p-1 rounded-full">
      <MaterialIcons name="navigate-next" size={48} color="white" />
    </Pressable>
  );
};

export default Next;
