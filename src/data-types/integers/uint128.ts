import { type DataType, DataTypes } from "../../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/int-uint */
export type CHUInt128 = DataType<DataTypes.UInt128, number>;

/**
 * Creates a new `UInt128` ClickHouse value
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/int-uint
 */
export const uint128 = (c?: {
  description?: string;
  default?: number;
}): CHUInt128 => ({
  type: DataTypes.UInt128,
  description: c?.description,
  default: c?.default,
  typeScriptType: c?.default!,
});
