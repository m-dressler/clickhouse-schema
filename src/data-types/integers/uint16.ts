import { type DataType, DataTypes } from "../../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/int-uint */
export type CHUInt16 = DataType<DataTypes.UInt16, number>;

/**
 * Creates a new `UInt16` ClickHouse value
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/int-uint
 */
export const uint16 = (c?: {
  description?: string;
  default?: number;
}): CHUInt16 => ({
  type: DataTypes.UInt16,
  description: c?.description,
  default: c?.default,
  typeScriptType: c?.default!,
});
