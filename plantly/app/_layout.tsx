import { SplashScreen, Stack } from "expo-router";

export default function RootLayout() {
  // use the SplashScreen methods for keeping the splash screen up and hiding it
  // good pattern for auth to keep the screen open while an async function runs
  // SplashScreen.preventAutoHideAsync();
  // SplashScreen.hideAsync();
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
