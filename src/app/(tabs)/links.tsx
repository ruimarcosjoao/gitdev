import { getLinks } from "@/actions/links";
import { Button } from "@/components/Button";
import { db } from "@/db/db";
import { link } from "@/db/schema";
import { queryClient } from "@/query/clientProvider";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Link } from "expo-router";
import { ExternalLink, Plus } from "lucide-react-native";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import colors from "tailwindcss/colors";

export default function Links() {
  const { data } = useQuery({ queryKey: ["links"], queryFn: getLinks });

  const mutation = useMutation({
    mutationFn: () => {
      return db.insert(link).values({
        title: "Rui Marcos",
        url: "https://github.com/ruimarcosjoao",
      });
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ["links"] });
    },
  });

  console.log(data);

  return (
    <View className="flex-1 bg-green-500 pt-12 p-6">
      <View className="flex-row items-center justify-between pb-4">
        <Text className="text-2xl font-bold text-zinc-50">Meus Links</Text>

        <Link asChild href={"/links/addLink"}>
          <Button className="z-50 active:bg-orange-500/90 border border-green-500 w-auto px-3 bg-orange-500">
            <Plus color={colors.zinc[900]} />
            <Text>Adicionar</Text>
          </Button>
        </Link>
      </View>
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="mt-8 pb-40">
          {data && data?.length > 0 ? (
            data?.map((item, index) => {
              return (
                <View
                  key={index}
                  className="w-full p-3 flex-row items-center justify-between rounded-lg border border-zinc-400 mt-3"
                >
                  <View className="flex-col gap-0">
                    <Text className="text-xl text-orange-300 font-medium">
                      {item.title}
                    </Text>
                    <Text className="text-sm text-zinc-300 ">{item.url}</Text>
                  </View>
                  <Pressable className="p-2 items-center bg-orange-500 justify-center  rounded-lg">
                    <ExternalLink color={colors.zinc[900]} size={20} />
                  </Pressable>
                </View>
              );
            })
          ) : (
            <Text className="text-2xl text-center font-medium text-red-400">
              Não tem nenhum link salvo!
            </Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
