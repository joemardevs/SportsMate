import { Text, TouchableOpacity } from "react-native";

type ButtonVariant = "contained" | "outlined" | "text";

export type CustomButtonProps = {
  variant?: ButtonVariant;
  title: string;
  handlePress: () => void;
  containerStyles?: string;
  textStyles?: string;
  isDisabled?: boolean;
};

/**
 * Custom button component
 * @param variant - The variant of the button - contained, outlined, text
 * @param title - The title of the button
 * @param handlePress - The function to be called when the button is pressed
 * @param containerStyles - The styles for the button container
 * @param textStyles - The styles for the button text
 * @param isDisabled - The flag to disable the button
 * @returns The custom button component
 */
const CustomButton = ({
  variant = "contained",
  title,
  handlePress,
  containerStyles,
  textStyles,
  isDisabled,
}: CustomButtonProps) => {
  const containedButtonVariantClasses =
    "bg-primary rounded-xl py-2 flex flex-row justify-center items-center";
  const outlinedButtonVariantClasses =
    "border border-primary rounded-xl py-2 flex flex-row justify-center items-center";
  const textButtonVariantClasses =
    "py-2 flex flex-row justify-center items-center";

  const containedLabelClasses = "text-white font-semibold text-lg";
  const outlinedLabelClasses = "text-primary font-semibold text-lg";
  const textLabelClasses = "text-primary font-semibold text-lg";

  const getButtonVariantClasses = () => {
    switch (variant) {
      case "contained":
        return containedButtonVariantClasses;
      case "outlined":
        return outlinedButtonVariantClasses;
      case "text":
        return textButtonVariantClasses;
      default:
        return containedButtonVariantClasses;
    }
  };

  const getLabelClasses = () => {
    switch (variant) {
      case "contained":
        return containedLabelClasses;
      case "outlined":
        return outlinedLabelClasses;
      case "text":
        return textLabelClasses;
      default:
        return containedLabelClasses;
    }
  };

  return (
    <TouchableOpacity
      accessibilityLabel="button"
      onPress={handlePress}
      activeOpacity={0.7}
      className={`${getButtonVariantClasses()} ${containerStyles} ${
        isDisabled ? "opacity-50" : ""
      }`}
      disabled={isDisabled}>
      <Text className={`${getLabelClasses()} ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
