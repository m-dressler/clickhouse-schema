import { type DataType, DataTypes } from "../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/fixedstring */
export type CHFixedString = DataType<DataTypes.FixedString, string>;

/**
 * Creates a new `FixedString` ClickHouse value
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/fixedstring
 */
export const fixedString = (c: {
  length: number;
  description?: string;
  default?: string;
}): CHFixedString => ({
  type: DataTypes.FixedString,
  description: c.description,
  default: c.default,
  typeScriptType: c.default!,
  arguments: [c.length],
});
