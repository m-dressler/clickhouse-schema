import { type DataType, DataTypes } from "../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/dynamic */
export type CHDynamic = DataType<DataTypes.Dynamic, unknown>;

/**
 * Creates a new `Dynamic` ClickHouse value
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/dynamic
 */
export const dynamic = (c: {
  maxTypes: number;
  description?: string;
  default?: unknown;
}): CHDynamic => ({
  type: DataTypes.Dynamic,
  typeScriptType: c.default,
  description: c.description,
  default: c.default,
  arguments: [c.maxTypes],
});
