import { DataType, DataTypes } from "../../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/int-uint */
export type CHUInt32 = DataType<DataTypes.UInt32, number>;

/**
 * Creates a new `UInt32` ClickHouse value
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/int-uint
 */
export const uint32 = ({
  description,
  default: defaultVal,
}: {
  description?: string;
  default?: number;
} = {}): CHUInt32 => ({
  type: DataTypes.UInt32,
  description,
  default: defaultVal,
  typeScriptType: defaultVal!,
});
