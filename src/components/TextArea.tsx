import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Text, TextInput, TextInputProps, View, ViewProps } from "react-native";
import colors from "tailwindcss/colors";

function TextArea({
  children,
  className,
  label,
}: { children: ReactNode; label?: string } & ViewProps) {
  return (
    <View className="w-full flex-col gap-2">
      {label && <Text className="font-normal  text-zinc-200">{label}</Text>}
      <View
        className={cn(
          "w-full h-auto rounded-md border flex-row p-3 gap-3 border-gray-400 items-center ",
          className
        )}
      >
        {children}
      </View>
    </View>
  );
}

function Field({ className, ...rest }: TextInputProps) {
  return (
    <TextInput
      multiline
      numberOfLines={4}
      className={cn(
        "flex-1 text-base font-regular text-white items-start",
        className
      )}
      placeholderTextColor={colors.gray[400]}
      {...rest}
    />
  );
}

TextArea.Field = Field;

export { TextArea };
