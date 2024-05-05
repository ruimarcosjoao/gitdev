import { Button } from "@/components/Button";
import { Crendential } from "@/components/Crendential";
import { Download } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";
import colors from "tailwindcss/colors";

export default function Index() {
  return (
    <View className="flex-1 p-6 items-center justify-center bg-green-500">
      {/* <Input>
        <Feather name="activity" color={colors.gray[400]} size={20} />
        <Input.Field />
      </Input> */}
      <Crendential />
      <Button className="mt-4 active:bg-orange-500/80">
        <Download color={colors.zinc[900]} />
        <Text className="font-medium text-lg">Exportar</Text>
      </Button>
    </View>
  );
}
