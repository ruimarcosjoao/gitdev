import { ExternalLink } from "lucide-react-native";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import colors from "tailwindcss/colors";

export default function Links() {
  return (
    <ScrollView
      className="flex-1 bg-green-500 pt-12 p-6"
      showsVerticalScrollIndicator={false}
    >
      <Text className="text-2xl font-bold text-zinc-50">Meus Links</Text>
      <View className="mt-8 pb-40">
        {Array.from({ length: 20 }).map((item, index) => {
          return (
            <View
              key={index}
              className="w-full p-3 flex-row items-center justify-between rounded-lg border border-zinc-400 mt-3"
            >
              <View className="flex-col gap-0">
                <Text className="text-xl text-orange-300 font-medium">
                  Nome do Link
                </Text>
                <Text className="text-sm text-zinc-300 ">
                  https://github.com/ruimarcosjoao
                </Text>
              </View>
              <Pressable className="p-2 items-center bg-orange-500 justify-center  rounded-lg">
                <ExternalLink color={colors.zinc[900]} size={20} />
              </Pressable>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
