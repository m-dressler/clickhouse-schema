import { type DataType, DataTypes } from "../../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/int-uint */
export type CHUInt8 = DataType<DataTypes.UInt8, number>;

/**
 * Creates a new `UInt8` ClickHouse value
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/int-uint
 */
export const uint8 = (c?: {
  description?: string;
  default?: number;
}): CHUInt8 => ({
  type: DataTypes.UInt8,
  description: c?.description,
  default: c?.default,
  typeScriptType: c?.default!,
});
