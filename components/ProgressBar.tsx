import React, { useEffect, useRef } from "react";
import { View, Animated } from "react-native";

const ProgressBar = ({ currentStep = 1, totalSteps = 11 }) => {
  const progress = Math.min(currentStep / totalSteps, 1); // Calculate progress percentage

  // Create an animated value to control the width of the progress bar
  const progressAnim = useRef(new Animated.Value(0)).current;

  // Animate the progress width when the currentStep changes
  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: progress, // Animate to the calculated progress
      duration: 300, // Set the duration of the animation
      useNativeDriver: false, // Since we're animating width, useNativeDriver must be false
    }).start();
  }, [currentStep, progress]);

  return (
    <View className="w-full bg-primary/20 h-1 rounded-full mt-4">
      <Animated.View
        className="bg-primary h-full rounded-full"
        style={{
          width: progressAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ["0%", "100%"], // Animate from 0% to 100% width
          }),
        }}
      />
    </View>
  );
};

export default ProgressBar;
