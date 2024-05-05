import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import { Pressable, PressableProps } from "react-native";

export function Button({
  children,
  className,
  ...rest
}: { children: ReactNode } & PressableProps) {
  return (
    <Pressable
      className={cn(
        "h-14 items-center justify-center flex-row rounded-lg bg-orange-500 w-full gap-3",
        className
      )}
      {...rest}
    >
      {children}
    </Pressable>
  );
}
