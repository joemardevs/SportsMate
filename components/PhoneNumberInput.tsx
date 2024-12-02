import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Icon from "./Icon";
import useSize from "@/hooks/useSize";
import useColorPalette from "@/hooks/useColorPalette";

type PhoneNumberInputProps = {
  title: string;
  value: string;
  countryCodeValue: (code: string) => void;
  placeholder: string;
  handleChangeText: (text: string) => void;
  otherStyles?: string;
  isError?: boolean;
  isErrorText?: string[];
};

/**
 * Phone number input component
 * @param title - The title of the phone number input
 * @param value - The value of the phone number input
 * @param countryCodeValue - The function to set the country code value
 * @param placeholder - The placeholder of the phone number input
 * @param handleChangeText - The function to be called when the text changes
 * @param otherStyles - The other styles for the phone number input
 * @param isError - The flag to show error
 * @param isErrorText - The error text to be shown
 * @returns The phone number input component
 */
const PhoneNumberInput = ({
  title,
  value,
  countryCodeValue,
  placeholder,
  handleChangeText,
  otherStyles,
  isError,
  isErrorText,
  ...props
}: PhoneNumberInputProps) => {
  const screenSize = useSize();
  const colorPalette = useColorPalette();
  const [countryCode, setCountryCode] = useState<string>("+44");
  const [showCountryCodeModal, setShowCountryCodeModal] = useState(false);

  const handleSelectCountryCode = (code: string) => {
    setCountryCode(code);
    countryCodeValue(code);
    setShowCountryCodeModal(false);
  };

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      {title && (
        <Text
          accessibilityLabel="title"
          className="text-base text-primary font-medium">
          {title}
        </Text>
      )}

      <View className="w-full p-1 bg-white rounded-xl border border-gray focus:border-primary flex flex-row items-center">
        <TouchableOpacity
          accessibilityLabel="button"
          onPress={() => setShowCountryCodeModal(true)}
          className="pl-3">
          <View className="flex flex-row items-center">
            <Text className="text-black font-psemibold text-base">
              {countryCode}
            </Text>
            <Icon
              name="ChevronDown"
              color={colorPalette.gray.DEFAULT}
              size={screenSize.md}
            />
          </View>
        </TouchableOpacity>
        <View className="w-[1px] h-1/2 bg-gray-300 mr-3" />
        <TextInput
          className="flex-1 text-black text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="gray"
          onChangeText={handleChangeText}
          keyboardType="numeric"
          maxLength={10}
          cursorColor={colorPalette.primary.DEFAULT}
          inputMode="numeric"
          accessibilityLabel="input"
          {...props}
        />
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

      <Modal
        accessibilityLabel="modal"
        animationType="slide"
        transparent
        visible={showCountryCodeModal}
        presentationStyle="overFullScreen"
        onRequestClose={() => setShowCountryCodeModal(false)}
        className="border-b border-gray">
        <SafeAreaView className="flex-1 justify-center items-center">
          <View
            className="bg-white w-full rounded-xl mt-[100%]"
            style={{
              shadowColor: colorPalette.black[100],
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
            <View className="border-b border-gray">
              <Text className="text-center text-primary font-bold text-lg py-3">
                Select country code
              </Text>
              <TouchableOpacity
                onPress={() => setShowCountryCodeModal(false)}
                className="absolute top-4 right-3">
                <Icon
                  name="X"
                  color={colorPalette.black[100]}
                  size={screenSize.md}
                />
              </TouchableOpacity>
            </View>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingBottom: screenSize.md,
              }}>
              {[...Array(20)].map((_, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleSelectCountryCode(`+${index + 1}`)}
                  className="py-3 px-4 flex flex-row items-center justify-between">
                  <Text className="text-black font-psemibold text-base">
                    {index + 1}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

export default PhoneNumberInput;
