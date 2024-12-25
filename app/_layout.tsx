import { Stack } from "expo-router";

import "./globals.css";
import { useFonts } from "expo-font";

const [fontsLoaded] = useFonts({
  "Rubik-Bold": require("../assets/fonts/Rubik-Bold.ttf"),
  "Rubik-ExtraBold": require("../assets/fonts/Rubik-ExtraBold.ttf"),
  "Rubik-Light": require("../assets/fonts/Rubik-Light.ttf"),
  "Rubik-Medium": require("../assets/fonts/Rubik-Medium.ttf"),
  "Rubik-Regular": require("../assets/fonts/Rubik-Regular.ttf"),
  "Rubik-SemiBold": require("../assets/fonts/Rubik-SemiBold.ttf"),
});

export default function RootLayout() {
  return <Stack />;
}
