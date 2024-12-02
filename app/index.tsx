import CustomButton from "@/components/CustomButton";
import Input from "@/components/Input";
import { router } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-secondary p-4 flex justify-center items-center">
      <View className="flex-1 w-full flex justify-center items-center">
        <Image
          source={require("@/assets/images/icon.png")}
          className="w-56 h-56"
        />

        <Text className="mt-4 text-2xl text-white font-sfbold">Welcome!</Text>

        <Input
          title="Email"
          placeholder="Enter your email"
          handleChangeText={() => {}}
          containerStyle="mt-4"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Input
          title="Password"
          placeholder="Enter your password"
          handleChangeText={() => {}}
          containerStyle="mt-4"
          keyboardType="default"
          autoCapitalize="none"
        />

        <Pressable
          accessibilityLabel="forgot-password"
          className="self-end mt-6">
          <Text className="text-white text-sm underline">Forgot Password?</Text>
        </Pressable>

        <CustomButton
          title="Login"
          handlePress={() => router.navigate("/(tabs)/explore")}
          containerStyles="mt-6 w-full rounded-full"
        />

        <View className="w-full flex justify-center items-center mt-6">
          <Text
            accessibilityLabel="or"
            className="text-white text-sm font-medium">
            Or use one of the following
          </Text>

          <View className="flex flex-row justify-center items-center mt-4">
            <Pressable accessibilityLabel="google" className="mr-4">
              <Image
                source={require("@/assets/icons/google.png")}
                className="w-10 h-10"
              />
            </Pressable>

            <Pressable accessibilityLabel="apple" className="mr-4">
              <Image
                source={require("@/assets/icons/apple.png")}
                className="w-10 h-10"
              />
            </Pressable>

            <Pressable accessibilityLabel="facebook">
              <Image
                source={require("@/assets/icons/fb.png")}
                className="w-10 h-10"
              />
            </Pressable>
          </View>
        </View>
      </View>

      <View className="flex flex-row justify-center items-center">
        <Text
          accessibilityLabel="forgot-password"
          className="text-white text-sm">
          Don't have an account?
        </Text>
        <Pressable
          accessibilityLabel="sign-up"
          className="ml-1"
          onPress={() => router.navigate("/(sign-up)/phone-number")}>
          <Text className="text-white underline">Sign Up</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
