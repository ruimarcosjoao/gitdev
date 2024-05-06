import { Button } from "@/components/Button";
import { CameraType, CameraView, useCameraPermissions } from "expo-camera/next";
import { CheckCheck } from "lucide-react-native";
import { useState } from "react";
import {
  ActivityIndicatorComponent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "tailwindcss/colors";

export default function App() {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    return (
      <View className="flex-1 p-6 gap-6 justify-center items-center bg-green-500">
        <ActivityIndicatorComponent />
        <Text className="text-xl text-center font-medium text-zinc-200">
          Dando permição...
        </Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View className="flex-1 p-6 gap-6 justify-center items-center bg-green-500">
        <Text className="text-xl text-center font-medium text-zinc-200">
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission}>
          <CheckCheck color={colors.zinc[900]} />
          <Text>Dar Permição</Text>
        </Button>
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
