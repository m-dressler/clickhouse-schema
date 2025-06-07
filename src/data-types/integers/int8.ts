import { type DataType, DataTypes } from "../../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/int-uint */
export type CHInt8 = DataType<DataTypes.Int8, number>;

/**
 * Creates a new `Int8` ClickHouse value
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/int-uint
 */
export const int8 = (c?: {
  description?: string;
  default?: number;
}): CHInt8 => ({
  type: DataTypes.Int8,
  description: c?.description,
  default: c?.default,
  typeScriptType: c?.default!,
});
