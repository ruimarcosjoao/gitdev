import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";

export function Crendential() {
  return (
    <View className="bg-black/20 self-stretch items-center pb-6 border border-white/10  rounded-2xl overflow-hidden">
      <ImageBackground
        source={require("@/assets/image/fundos/fundo_1.png")}
        className="h-40 items-center self-stretch border-b border-white/10 overflow-hidden"
      >
        <View className="flex-1 px-6 py-8 items-center bg-green-500/60">
          <View className="w-full flex-row items-center justify-between">
            <Text className="text-zinc-50 text-sm font-medium">
              Afro Summit
            </Text>
            <Text className="text-zinc-50 text-sm font-medium">
              @ruimarcosjoao
            </Text>
          </View>
          <View className="w-40 h-40 bg-black rounded-full" />
        </View>
      </ImageBackground>
      <Image
        source={{ uri: "https://github.com/ruimarcosjoao.png" }}
        className="w-36 h-36 rounded-full -mt-24 bg-black"
      />
      <Text className="text-2xl font-bold text-zinc-50 mt-4">Rui Marcos</Text>
      <Text className="text-base font-normal text-zinc-300">
        @ruimarcosjoao
      </Text>
      <Image
        source={require("@/assets/image/qrcode.png")}
        className="w-36 h-36 mt-6"
      />
    </View>
  );
}
