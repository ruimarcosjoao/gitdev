import { Button } from "@/components/Button";
import { Crendential } from "@/components/Crendential";
import * as MediaLibrary from "expo-media-library";
import { shareAsync } from "expo-sharing";
import { Download, Save, Share } from "lucide-react-native";
import React, { useRef, useState } from "react";
import { Text, View } from "react-native";
import { captureRef } from "react-native-view-shot";
import colors from "tailwindcss/colors";

export default function Index() {
  const credetialRef = useRef<View>(null);
  const [capture, setCapture] = useState<string | null | undefined>();
  const [optionActive, setOptionActive] = useState<boolean>(false);

  const [status, requestPermission] = MediaLibrary.usePermissions();

  if (status === null) {
    requestPermission();
  }

  const snapshot = async () => {
    const result = await captureRef(credetialRef);
    setCapture(result);
    setOptionActive(true);
  };

  const shareImage = async () => {
    if (capture) await shareAsync(capture);
    setCapture(null);
    setOptionActive(false);
  };

  const saveImage = async () => {
    if (capture) await MediaLibrary.saveToLibraryAsync(capture);
    setCapture(null);
    alert("Imagem salva com sucesso!!");
    setOptionActive(false);
  };
  return (
    <View className="flex-1 p-6 items-center justify-center bg-green-500">
      <Crendential ref={credetialRef} />
      {capture && optionActive === true ? (
        <View className="flex-row items-center gap-3">
          <Button
            onPress={shareImage}
            className="mt-4 active:bg-orange-500/80 w-auto flex-2 px-6"
          >
            <Share color={colors.zinc[900]} />
          </Button>
          <Button
            onPress={saveImage}
            className="mt-4 active:bg-orange-500/80 flex-2 w-auto px-6"
          >
            <Save color={colors.zinc[900]} />
            <Text className="font-medium text-lg">Salvar na Galeria</Text>
          </Button>
        </View>
      ) : (
        <Button onPress={snapshot} className="mt-4 active:bg-orange-500/80">
          <Download color={colors.zinc[900]} />
          <Text className="font-medium text-lg">Exportar</Text>
        </Button>
      )}
    </View>
  );
}
