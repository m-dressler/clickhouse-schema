import { DataType, DataTypes } from "../_mod.ts";
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
export const json = <T>({
  maxDynamicPaths,
  maxDynamicTypes,
  typedPaths,
  skipPaths,
  skipPathsRegex,
  description,
  default: defaultVal,
}: {
  maxDynamicPaths?: number;
  maxDynamicTypes?: number;
  typedPaths?: Record<string, DataType<DataTypes, unknown>>;
  skipPaths?: string[];
  skipPathsRegex?: (RegExp | string)[];
  description?: string;
  default?: T;
} = {}): CHJson<T> => ({
  type: DataTypes.JSON,
  description,
  default: defaultVal,
  typeScriptType: defaultVal!,
  arguments: [
    ...(maxDynamicPaths != null
      ? [literal(`max_dynamic_paths=${maxDynamicPaths}`)]
      : []),
    ...(maxDynamicTypes != null
      ? [literal(`max_dynamic_types=${maxDynamicTypes}`)]
      : []),
    // TODO properly stringify typedPaths types
    ...(typedPaths != null
      ? Object.entries(typedPaths).map(([k, v]) =>
        literal(k + " " + stringifyDataType(v))
      )
      : []),
    ...(skipPaths != null ? skipPaths.map((v) => literal("SKIP " + v)) : []),
    ...(skipPathsRegex != null
      ? skipPathsRegex.map((v) =>
        literal(
          `SKIP REGEXP '${
            v instanceof RegExp ? v.toString().slice(1, -1) : v
          }'`,
        )
      )
      : []),
  ],
});
