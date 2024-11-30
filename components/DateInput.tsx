import { View, Text } from "react-native";
import React, { useState } from "react";
import Input from "./Input";
import MonthSelect from "./MonthSelect";

type DateInputProps = {
  overallTitle?: string;
  dayTitle?: string;
  monthTitle?: string;
  yearTitle?: string;
  dayPlaceholder?: string;
  monthPlaceholder?: string;
  yearPlaceholder?: string;
  handleChangeDate: ({
    day,
    month,
    year,
  }: {
    day: string;
    month: { id: number; name: string };
    year: string;
  }) => void;
  dateFormatValue?: (date: Date) => void;
  otherStyles?: string;
  isError?: boolean;
  isErrorText?: string[];
};

/**
 * Date input component
 * @param overallTitle - The title of the date input
 * @param dayTitle - The title of the day input
 * @param monthTitle - The title of the month input
 * @param yearTitle - The title of the year input
 * @param value - The value of the date input
 * @param dayPlaceholder - The placeholder of the day input
 * @param monthPlaceholder - The placeholder of the month input
 * @param yearPlaceholder - The placeholder of the year input
 * @param handleChangeDate - The function to be called when the date changes
 * @param dateFormatValue - The function to be called when the date format changes
 * @param otherStyles - The other styles for the date input
 * @param isError - The flag to show error
 * @param isErrorText - The error text to be shown
 * @returns The date input component
 */
const DateInput = ({
  overallTitle: title,
  dayTitle,
  monthTitle,
  yearTitle,
  dayPlaceholder,
  monthPlaceholder,
  yearPlaceholder,
  handleChangeDate,
  dateFormatValue,
  otherStyles,
  isError,
  isErrorText,
}: DateInputProps) => {
  const [date, setDate] = useState({
    day: "",
    month: {
      id: 1,
      name: "January",
    },
    year: "",
  });
  const [isDayError, setIsDayError] = useState(false);
  const [isYearError, setIsYearError] = useState(false);
  const [dayErrorText, setDayErrorText] = useState<string[]>([]);
  const [yearErrorText, setYearErrorText] = useState<string[]>([]);

  const handleChangeDay = (day: string) => {
    if (parseInt(day) < 1) {
      setIsDayError(true);
      return setDayErrorText([...dayErrorText, "Day must be greater than 0"]);
    }

    if (parseInt(day) > 31) {
      setIsDayError(true);
      return setDayErrorText([
        ...dayErrorText,
        "Day must be less than or equal to 31",
      ]);
    }

    setIsDayError(false);
    setDayErrorText([]);
    setDate({ ...date, day });
    handleChangeDate({ ...date, day });
    dateFormatValue?.(convertToDate(day, date.month, date.year));
  };

  const handleChangeMonth = ({ id, name }: { id: number; name: string }) => {
    setDate({ ...date, month: { id, name } });
    handleChangeDate({ ...date, month: { id, name } });
    dateFormatValue?.(convertToDate(date.day, { id, name }, date.year));
  };

  const handleChangeYear = (year: string) => {
    const curentYear = new Date().getFullYear();

    if (parseInt(year) < 1) {
      setIsYearError(true);
      return setYearErrorText([
        ...yearErrorText,
        "Year must be greater than 0",
      ]);
    }

    if (parseInt(year) > curentYear) {
      setIsYearError(true);
      return setYearErrorText([
        ...yearErrorText,
        "Year must be less than or equal to current year",
      ]);
    }

    setIsYearError(false);
    setYearErrorText([]);
    setDate({ ...date, year });
    handleChangeDate({ ...date, year });
    dateFormatValue?.(convertToDate(date.day, date.month, year));
  };

  const convertToDate = (
    date: string,
    month: { id: number; name: string },
    year: string
  ) => {
    const setDay = date.length === 1 ? `0${date}` : date;
    const setMonth = month.id < 10 ? `0${month.id}` : month.id;
    const setDate = `${year}-${setMonth}-${setDay}`;

    return new Date(setDate);
  };

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      {title && (
        <Text className="text-base text-primary font-medium">{title}</Text>
      )}
      <View className="flex flex-row">
        <Input
          title={dayTitle as string}
          placeholder={dayPlaceholder || "Day"}
          handleChangeText={handleChangeDay}
          otherStyles="flex-1 mr-2"
          keyboardType="numeric"
          maxLength={2}
        />
        <MonthSelect
          title={monthTitle as string}
          placeholder={monthPlaceholder || "Month"}
          handleChangeMonth={handleChangeMonth}
          otherStyles="flex-1 mr-2"
        />
        <Input
          title={yearTitle as string}
          placeholder={yearPlaceholder || "Year"}
          handleChangeText={handleChangeYear}
          otherStyles="flex-1 mr-2"
          keyboardType="numeric"
          maxLength={4}
        />
      </View>

      {(isError || isDayError || isYearError) && (
        <View className="mt-2">
          {[
            ...((isError ? isErrorText : []) || []),
            ...(isDayError ? dayErrorText : []),
            ...(isYearError ? yearErrorText : []),
          ]?.map((text, index) => (
            <Text key={index} className="text-red-500 text-sm">
              {text}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
};

export default DateInput;
