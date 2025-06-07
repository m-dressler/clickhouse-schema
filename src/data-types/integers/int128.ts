import { type DataType, DataTypes } from "../../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/int-uint */
export type CHInt128 = DataType<DataTypes.Int128, number>;

/**
 * Creates a new `Int128` ClickHouse value
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/int-uint
 */
export const int128 = (c?: {
  description?: string;
  default?: number;
}): CHInt128 => ({
  type: DataTypes.Int128,
  description: c?.description,
  default: c?.default,
  typeScriptType: c?.default!,
});
