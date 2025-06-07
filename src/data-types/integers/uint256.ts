import { type DataType, DataTypes } from "../../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/int-uint */
export type CHUInt256 = DataType<DataTypes.UInt256, number>;

/**
 * Creates a new `UInt256` ClickHouse value
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/int-uint
 */
export const uint256 = (c?: {
  description?: string;
  default?: number;
}): CHUInt256 => ({
  type: DataTypes.UInt256,
  description: c?.description,
  default: c?.default,
  typeScriptType: c?.default!,
});
