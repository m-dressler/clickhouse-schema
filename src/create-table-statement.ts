import { AnyDataType, Engines, Schema } from "./_mod.ts";
import { stringifyDataType } from "./stringify-data-type.ts";

/** Converts a column's schema into the CREATE TABLE string statement */
const stringifyColumn = ([columnName, column]: [string, AnyDataType]) => {
  let str = `  ${columnName} ${stringifyDataType(column)}`;
  if (column.default) {
    str += " DEFAULT ";
    if (typeof column.default === "string") str += `'${column.default}'`;
    else if (Array.isArray(column.default)) {
      str += `(${column.default.join(", ")})`;
    } else str += column.default;
  }
  return str;
};

/**
 * Converts a {@link Schema} into a CREATE TABLE query string
 *
 * @param options
 * @param options.tableName The name of the table
 * @param options.schema The schema to convert
 * @param options.orderBy The columns to order by
 * @param options.engine The engine to use (default: "MergeTree"). Can be any string value.
 * @param options.database The database to use
 * @param options.cluster The cluster to use
 * @param options.partitionBy The columns to partition by. Can be any string value, e.g. `toYYYYMM(col)`
 *
 * @returns The CREATE TABLE query string
 *
 * @example
 * ```ts
 * import * as CH from "@md/clickhouse-schema";
 *
 * const SCHEMA = {
 *   id: CH.uint64(),
 *   name: CH.lowCardinality({ itemType: CH.string() }),
 *   date_of_birth: CH.dateTime({ timezone: 'UTC' }),
 * } as const satisfies CH.Schema;
 *
 * const query = CH.toCreateTableQuery({
 *   tableName: "users",
 *   schema: SCHEMA,
 *   orderBy: ["id"],
 *   // engine: "MergeTree",
 *   // partitionBy: ["toYYYYMM(date_of_birth)"],
 *   // database: "user_db",
 *   // cluster: "user_cluster",
 * });
 * ```
 */
export const toCreateTableQuery = <T extends Schema>({
  tableName,
  schema,
  orderBy,
  engine = "MergeTree",
  database,
  cluster,
  partitionBy,
}: {
  tableName: string;
  schema: T;
  orderBy: Array<keyof T>;
  // deno-lint-ignore ban-types
  engine?: Engines | (string & {});
  database?: string;
  cluster?: string;
  // deno-lint-ignore ban-types
  partitionBy?: Array<keyof T | (string & {})>;
}): string => {
  let str = `CREATE TABLE IF NOT EXISTS ${
    database ? database + "." : ""
  }${tableName}${cluster ? ` ON CLUSTER ${cluster}` : ""}
(
${Object.entries(schema).map(stringifyColumn).join(",\n")}
)
ENGINE = ${engine}()
ORDER BY (${orderBy.join()})`;

  if (partitionBy) str += `\nPARTITION BY (${partitionBy.join(", ")})`;

  return str + ";";
};
