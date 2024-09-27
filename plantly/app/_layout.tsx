import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import * as QuickActions from "expo-quick-actions";
import { Platform } from "react-native";
import { useQuickActionRouting } from "expo-quick-actions/router";

export default function RootLayout() {
  // use the SplashScreen methods for keeping the splash screen up and hiding it
  // good pattern for auth to keep the screen open while an async function runs
  // SplashScreen.preventAutoHideAsync();
  // SplashScreen.hideAsync();
  useQuickActionRouting();
  useEffect(() => {
    QuickActions.setItems([
      {
        title: "Add a plant",
        icon: Platform.OS === "ios" ? "symbol:leaf" : "leaf",
        id: "0",
        params: { href: "/new" },
      },
    ]);
  }, []);

  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          animation: "fade",
        }}
      />
      <Stack.Screen
        name="onboarding"
        options={{
          headerShown: false,
          animation: "fade",
        }}
      />
      <Stack.Screen
        name="new"
        options={{
          presentation: "modal",
          title: "New plant",
        }}
      />
    </Stack>
  );
}
