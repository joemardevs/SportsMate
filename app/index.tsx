import CustomButton from "@/components/CustomButton";
import DateInput from "@/components/DateInput";
import Input from "@/components/Input";
import MonthSelect from "@/components/MonthSelect";
import OTPInput from "@/components/OTPInput";
import PhoneNumberInput from "@/components/PhoneNumberInput";
import moment from "moment";
import { useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [countryCode, setCountryCode] = useState<string>("+60");
  const [phoneNumber, setphoneNumber] = useState<string>("");
  const [otp, setOtp] = useState<number>(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  const handlePhoneNumberChange = (text: string) => {
    setphoneNumber(text);
    console.log("Phone number: ", countryCode + text);

    setIsButtonDisabled(!(text.length > 6));
  };

  const handleOTPChange = (newOTP: string[]) => {
    const otpValue = +newOTP.join("");
    setOtp(otpValue);
    setIsButtonDisabled(!(otpValue > 999));
    console.log("OTP: ", otpValue);
  };

  return (
    <SafeAreaView className="flex-1 bg-white p-4 flex justify-center">
      <PhoneNumberInput
        title="Phone number"
        value={phoneNumber}
        placeholder="Enter your phone number"
        countryCodeValue={setCountryCode}
        handleChangeText={handlePhoneNumberChange}
        isError
        isErrorText={["Phone number is required"]}
      />
      <Input
        title="Email"
        placeholder="Enter your email"
        handleChangeText={text => console.log("Email: ", text)}
        isError
        isErrorText={["Email is required"]}
      />
      <OTPInput
        onChangeValue={handleOTPChange}
        length={4}
        isError
        isErrorText={["OTP is required"]}
      />

      <DateInput
        dayTitle="Day"
        monthTitle="Month"
        yearTitle="Year"
        handleChangeDate={({ day, month, year }) =>
          console.log("Date of birth 1: ", day, month, year)
        }
        dateFormatValue={date =>
          console.log("Date of birth 2: ", moment(date).format("MMMM DD, YYYY"))
        }
        isError
        isErrorText={[
          "Day is required",
          "Month is required",
          "Year is required",
        ]}
      />

      <CustomButton
        title="Get Started"
        handlePress={() => alert(countryCode + phoneNumber)}
        containerStyles="mt-4 rounded-full"
        isDisabled={isButtonDisabled}
      />
    </SafeAreaView>
  );
}
