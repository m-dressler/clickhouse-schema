import { DataType, DataTypes } from "../../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/int-uint */
export type CHUInt8 = DataType<DataTypes.UInt8, number>;

/**
 * Creates a new `UInt8` ClickHouse value
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/int-uint
 */
export const uint8 = ({
  description,
  default: defaultVal,
}: {
  description?: string;
  default?: number;
} = {}): CHUInt8 => ({
  type: DataTypes.UInt8,
  description,
  default: defaultVal,
  typeScriptType: defaultVal!,
});
