import { db } from "@/db/db";
import { link } from "@/db/schema";

export const getLinks = async () => {
  const data = await db.select().from(link);
  return data;
};
