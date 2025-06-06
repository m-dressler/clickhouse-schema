import { DataType, DataTypes } from "../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/fixedstring */
export type CHFixedString = DataType<DataTypes.FixedString, string>;

/**
 * Creates a new `FixedString` ClickHouse value
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/fixedstring
 */
export const fixedString = ({
  length,
  description,
  default: defaultVal,
}: {
  length: number;
  description?: string;
  default?: string;
}): CHFixedString => ({
  type: DataTypes.FixedString,
  description,
  default: defaultVal,
  typeScriptType: defaultVal!,
  arguments: [length],
});
