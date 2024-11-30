import useColorPalette from "@/hooks/useColorPalette";
import useSize from "@/hooks/useSize";
import React, { useRef, useState } from "react";
import { View, TextInput, Text } from "react-native";

type OTPInputProps = {
  value?: string[];
  length?: number;
  onChangeValue: (otp: string[]) => void;
  isError?: boolean;
  isErrorText?: string[];
};

/**
 * OTP input component
 * @param value - The value of the OTP input
 * @param length - The length of the OTP input
 * @param onChangeValue - The function to be called when the OTP changes
 * @param isError - The flag to show error
 * @param isErrorText - The error text to be shown
 * @returns The OTP input component
 */
const OTPInput = ({
  length = 4,
  onChangeValue,
  isError,
  isErrorText,
}: OTPInputProps) => {
  const textInputRef = useRef<TextInput[]>([]);
  const colorPalette = useColorPalette();
  const screenSize = useSize();

  const [otp, setOTP] = useState<string[]>(Array(length).fill(""));
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  const handleChange = (text: string, index: number) => {
    const newValue = [...otp];
    newValue[index] = text;
    setOTP(newValue);
    onChangeValue(newValue);

    // Automatically focus on the next input if available
    if (text && index < otp.length - 1) {
      textInputRef.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (
      (e.nativeEvent.key === "Backspace" || e.nativeEvent.key === "Delete") &&
      index > 0 &&
      otp[index] === ""
    ) {
      textInputRef.current[index - 1].focus();
      handleChange("", index - 1);
    }

    if (/^\d+$/g.test(e.nativeEvent.key)) {
      handleChange(e.nativeEvent.key, index);
    }
  };

  return (
    <View>
      <View className="flex flex-row justify-center space-x-2 mt-4">
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={ref => (textInputRef.current[index] = ref as TextInput)}
            className={`text-2xl font-semibold text-center border rounded-lg ${
              focusedIndex === index ? "border-primary" : "border-gray"
            }`}
            style={{
              width: Math.round(screenSize.xl * 2),
              height: Math.round(screenSize.xl * 2),
            }}
            selectionColor={colorPalette.primary[200]}
            cursorColor={colorPalette.primary.DEFAULT}
            value={digit}
            onChangeText={text => handleChange(text, index)}
            onKeyPress={e => handleKeyPress(e, index)}
            onFocus={() => setFocusedIndex(index)}
            keyboardType="number-pad"
            maxLength={1}
          />
        ))}
      </View>
      {isError && (
        <View className="mt-2">
          {isErrorText?.map((text, index) => (
            <Text key={index} className="text-red-500 text-sm text-center">
              {text}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
};

export default OTPInput;
