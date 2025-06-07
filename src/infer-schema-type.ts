import type { Schema } from "./_mod.ts";

/**
 * Infers the typescript representation of a schema
 *
 * @example
 * ```ts
 * import * as CH from "clickhouse-schema";
 *
 * const DB_SCHEMA = { id: CH.int8() } as const satisfies CH.Schema;
 * type DbSchema = CH.infer<typeof DB_SCHEMA>;
 * ```
 */
export type infer<T extends Schema> = {
  -readonly [K in keyof T]: T[K]["typeScriptType"];
};
