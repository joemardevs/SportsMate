import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
  SafeAreaView,
  Pressable,
  TextInput,
} from "react-native";
import Icon from "./Icon";
import useSize from "@/hooks/useSize";
import useColorPalette from "@/hooks/useColorPalette";

const MONTH_DATA = [
  { id: 1, name: "January" },
  { id: 2, name: "February" },
  { id: 3, name: "March" },
  { id: 4, name: "April" },
  { id: 5, name: "May" },
  { id: 6, name: "June" },
  { id: 7, name: "July" },
  { id: 8, name: "August" },
  { id: 9, name: "September" },
  { id: 10, name: "October" },
  { id: 11, name: "November" },
  { id: 12, name: "December" },
];

type MonthSelectProps = {
  title: string;
  value?: string;
  placeholder: string;
  handleChangeMonth: ({ id, name }: { id: number; name: string }) => void;
  otherStyles?: string;
  isError?: boolean;
  isErrorText?: string[];
};

/**
 * Phone number input component
 * @param title - The title of the phone number input
 * @param value - The value of the phone number input
 * @param placeholder - The placeholder of the phone number input
 * @param handleChangeMonth - The function to be called when the text changes
 * @param otherStyles - The other styles for the phone number input
 * @param isError - The flag to show error
 * @param isErrorText - The error text to be shown
 * @returns The phone number input component
 */
const MonthSelect = ({
  title,
  value,
  placeholder,
  handleChangeMonth,
  otherStyles,
  isError,
  isErrorText,
}: MonthSelectProps) => {
  const screenSize = useSize();
  const colorPalette = useColorPalette();
  const [selectMonth, setSelectMonth] = useState<{
    id: number;
    name: string;
  } | null>(null);
  const [showMonthModal, setShowMonthModal] = useState(false);

  const handleSelectMonth = (month: { id: number; name: string }) => {
    setSelectMonth(month);
    handleChangeMonth(month);
    setShowMonthModal(false);
  };

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      {title && (
        <Text className="text-base text-primary font-medium">{title}</Text>
      )}

      <Pressable
        onPress={() => setShowMonthModal(true)}
        className="w-full p-3 bg-white rounded-xl border border-gray focus:border-primary flex flex-row items-center">
        <TextInput
          className="flex-1 text-black text-base"
          value={selectMonth?.name || value}
          placeholder={placeholder}
          placeholderTextColor={colorPalette.gray.DEFAULT}
          editable={false}
          onPress={() => setShowMonthModal(true)}
        />
      </Pressable>

      {isError && (
        <View>
          {isErrorText?.map((text, index) => (
            <Text key={index} className="text-red-500 text-sm">
              {text}
            </Text>
          ))}
        </View>
      )}

      <Modal
        animationType="slide"
        transparent
        visible={showMonthModal}
        presentationStyle="overFullScreen"
        onRequestClose={() => setShowMonthModal(false)}
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
                Select Month
              </Text>
              <TouchableOpacity
                onPress={() => setShowMonthModal(false)}
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
              {MONTH_DATA.map(month => (
                <TouchableOpacity
                  key={month.id}
                  onPress={() => handleSelectMonth(month)}
                  className="py-3 px-4 flex flex-row items-center justify-between">
                  <Text className="text-black font-semibold text-base">
                    {month.name}
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

export default MonthSelect;
