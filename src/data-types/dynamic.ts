import { DataType, DataTypes } from "../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/dynamic */
export type CHDynamic = DataType<DataTypes.Dynamic, unknown>;

/**
 * Creates a new `Dynamic` ClickHouse value
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/dynamic
 */
export const dynamic = ({
  maxTypes,
  description,
  default: defaultVal,
}: {
  maxTypes: number;
  description?: string;
  default?: unknown;
}): CHDynamic => ({
  type: DataTypes.Dynamic,
  typeScriptType: defaultVal,
  description,
  default: defaultVal,
  arguments: [maxTypes],
});
