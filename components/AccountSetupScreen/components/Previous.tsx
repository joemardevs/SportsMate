import { Pressable } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

type PreviousProps = {
  onPress: () => void;
};

const Previous = ({ onPress }: PreviousProps) => {
  return (
    <Pressable onPress={onPress} className="bg-tertiary p-1 rounded-full">
      <MaterialIcons name="navigate-before" size={48} color="black" />
    </Pressable>
  );
};

export default Previous;
