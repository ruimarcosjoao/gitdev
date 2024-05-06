import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const link = sqliteTable("link", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  url: text("url", { mode: "text" }),
  title: text("title").notNull().unique(),
  description: text("description", { mode: "text" }),
  capa: text("capa", { mode: "text" }),
  image: text("image"),
  arroba: text("arroba"),
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" })
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});
