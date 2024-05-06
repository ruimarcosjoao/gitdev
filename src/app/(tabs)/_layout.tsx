import { colors } from "@/styles/colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { Candy, Link, ScanBarcode } from "lucide-react-native";
import React from "react";
import colorsTw from "tailwindcss/colors";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          borderTopWidth: 0,
          bottom: 14,
          left: 14,
          right: 14,
          shadowColor: colorsTw.zinc[900],
          backgroundColor: colors.green[400],
          borderRadius: 16,
          height: 60,
        },
        tabBarInactiveTintColor: colorsTw.zinc[50],
        tabBarActiveTintColor: colors.orange[500],
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Tab One",
          tabBarIcon: ({ color }) => <Candy color={color} />,
        }}
      />
      <Tabs.Screen
        name="links"
        options={{
          title: "Tab One",
          tabBarIcon: ({ color }) => <Link color={color} />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Tab Two",
          tabBarIcon: ({ color }) => <ScanBarcode color={color} />,
        }}
      />
    </Tabs>
  );
}
