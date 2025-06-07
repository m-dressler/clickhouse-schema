import { type DataType, DataTypes } from "../_mod.ts";
import { literal, stringifyDataType } from "../stringify-data-type.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/newjson */
export type CHJson<T> = DataType<DataTypes.JSON, T>;

/**
 * Creates a new `JSON` ClickHouse value
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/newjson
 *
 * @param typedPaths A dot separated path and its type
 */
export const json = <T>(c?: {
  maxDynamicPaths?: number;
  maxDynamicTypes?: number;
  typedPaths?: Record<string, DataType<DataTypes, unknown>>;
  skipPaths?: string[];
  skipPathsRegex?: (RegExp | string)[];
  description?: string;
  default?: T;
}): CHJson<T> => ({
  type: DataTypes.JSON,
  description: c?.description,
  default: c?.default,
  typeScriptType: c?.default!,
  arguments: [
    ...(c?.maxDynamicPaths != null
      ? [literal(`max_dynamic_paths=${c.maxDynamicPaths}`)]
      : []),
    ...(c?.maxDynamicTypes != null
      ? [literal(`max_dynamic_types=${c.maxDynamicTypes}`)]
      : []),
    // TODO properly stringify typedPaths types
    ...(c?.typedPaths != null
      ? Object.entries(c.typedPaths).map(([k, v]) =>
        literal(k + " " + stringifyDataType(v))
      )
      : []),
    ...(c?.skipPaths != null
      ? c.skipPaths.map((v) => literal("SKIP " + v))
      : []),
    ...(c?.skipPathsRegex != null
      ? c.skipPathsRegex.map((v) =>
        literal(
          `SKIP REGEXP '${
            v instanceof RegExp ? v.toString().slice(1, -1) : v
          }'`,
        )
      )
      : []),
  ],
});
