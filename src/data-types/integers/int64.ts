import { type DataType, DataTypes } from "../../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/int-uint */
export type CHInt64 = DataType<DataTypes.Int64, number>;

/**
 * Creates a new `Int64` ClickHouse value
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/int-uint
 */
export const int64 = (c?: {
  description?: string;
  default?: number;
}): CHInt64 => ({
  type: DataTypes.Int64,
  description: c?.description,
  default: c?.default,
  typeScriptType: c?.default!,
});
