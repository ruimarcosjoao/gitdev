import { Input } from "@/components/Input";
import { TextArea } from "@/components/TextArea";
import { AtSign, Link } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import colors from "tailwindcss/colors";

export default function AddLink() {
  return (
    <KeyboardAwareScrollView>
      <View className="flex-1 bg-green-500 p-6">
        <Text className="text-3xl font-medium text-zinc-50">Formulário</Text>
        <Text className="text-md text-zinc-200">
          Adicione um link a sua biblioteca de links
        </Text>

        <View className="mt-8 flex-col gap-y-4 space-y-4">
          <Input label="Titulo do Link" className="">
            <Input.Field placeholder="Titulo do Link" />
          </Input>
          <TextArea label="Descrição">
            <TextArea.Field />
          </TextArea>
          <Input label="Link ou URL" className="">
            <Link color={colors.zinc[200]} />
            <Input.Field placeholder="Link que pretende salvar" />
          </Input>
          <Input label="Link ou URL" className="">
            <Link color={colors.zinc[200]} />
            <Input.Field placeholder="Link que pretende salvar" />
          </Input>
          <Input label="Identificado do Link (@)" className="">
            <AtSign color={colors.zinc[200]} />
            <Input.Field placeholder="Qual é o seu arroba?" />
          </Input>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
