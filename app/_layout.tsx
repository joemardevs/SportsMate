import { SplashScreen, Stack } from "expo-router";
import { useEffect, useState } from "react";
import * as Font from "expo-font";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "SF-Pro-Display-Bold": require("@/assets/fonts/SF-Pro-Display-Bold.otf"),
          "SF-Pro-Display-Medium": require("@/assets/fonts/SF-Pro-Display-Medium.otf"),
          "SF-Pro-Display-Regular": require("@/assets/fonts/SF-Pro-Display-Regular.otf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  if (!appIsReady) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
