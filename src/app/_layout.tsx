import { db } from "@/db/db";
import { ClientProvider } from "@/query/clientProvider";
import { colors } from "@/styles/colors";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
  Inter_900Black,
  useFonts,
} from "@expo-google-fonts/inter";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import migrations from "../../drizzle/migrations";
import "../../global.css";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { success, error: errorMigrations } = useMigrations(db, migrations);

  const [loaded, error] = useFonts({
    Inter_900Black,
    Inter_400Regular,
    Inter_700Bold,
    Inter_500Medium,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  if (errorMigrations) {
    return (
      <View className="flex-1 p-6 gap-6 justify-center items-center bg-green-500">
        <Text className="text-xl text-center font-medium text-zinc-200">
          Migration error: {errorMigrations.message}
        </Text>
      </View>
    );
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ClientProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
              name="links"
              options={{
                title: "Adicionar Link",
                headerStyle: {
                  backgroundColor: colors.green[400],
                },
                headerTitleStyle: {
                  color: colors.orange[500],
                },
                headerTitleAlign: "center",
              }}
            />
          </Stack>
        </ClientProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
