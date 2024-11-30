import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TextInputProps,
} from "react-native";
import Icon from "./Icon";
import useColorPalette from "@/hooks/useColorPalette";
import useSize from "@/hooks/useSize";

export type InputProps = {
  title: string;
  value?: string;
  placeholder: string;
  handleChangeText: (text: string) => void;
  otherStyles?: string;
  isError?: boolean;
  isErrorText?: string[];
} & TextInputProps;

/**
 * Form field component
 * @param title - The title of the form field
 * @param value - The value of the form field
 * @param placeholder - The placeholder of the form field
 * @param handleChangeText - The function to be called when the text changes
 * @param otherStyles - The other styles for the form field
 * @param isError - The flag to show error
 * @param isErrorText - The error text to be shown
 * @returns The form field component
 */
const Input = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  isError,
  isErrorText,
  ...props
}: InputProps) => {
  const screenSize = useSize();
  const colorPalette = useColorPalette();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      {title && (
        <Text
          accessibilityLabel="title"
          className="text-base text-primary font-medium">
          {title}
        </Text>
      )}

      <View className="w-full p-3 bg-white rounded-xl border border-gray focus:border-primary flex flex-row items-center">
        <TextInput
          className="flex-1 text-black text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor={colorPalette.gray.DEFAULT}
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          selectionColor={colorPalette.primary[200]}
          cursorColor={colorPalette.primary.DEFAULT}
          accessibilityLabel="input"
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            accessibilityLabel="toggle-password">
            {!showPassword ? (
              <Icon
                name="Eye"
                color={colorPalette.gray.DEFAULT}
                size={screenSize.md}
              />
            ) : (
              <Icon
                name="EyeOff"
                color={colorPalette.gray.DEFAULT}
                size={screenSize.md}
              />
            )}
          </TouchableOpacity>
        )}
      </View>

      {isError && (
        <View className="mt-2" accessibilityLabel="error-text">
          {isErrorText?.map((text, index) => (
            <Text key={index} className="text-red-500 text-sm">
              {text}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
};

export default Input;
