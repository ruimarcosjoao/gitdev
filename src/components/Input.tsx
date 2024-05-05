import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { TextInput, TextInputProps, View, ViewProps } from "react-native";
import colors from "tailwindcss/colors";

function Input({ children, className }: { children: ReactNode } & ViewProps) {
  return (
    <View
      className={cn(
        "w-full h-14 rounded-md border flex-row p-3 gap-3 border-gray-400 items-center ",
        className
      )}
    >
      {children}
    </View>
  );
}

function Field({ className, ...rest }: TextInputProps) {
  return (
    <TextInput
      className={cn("flex-1 text-base font-regular text-white", className)}
      placeholderTextColor={colors.gray[200]}
      {...rest}
    />
  );
}

Input.Field = Field;

export { Input };
