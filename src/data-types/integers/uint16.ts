import { DataType, DataTypes } from "../../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/int-uint */
export type CHUInt16 = DataType<DataTypes.UInt16, number>;

/**
 * Creates a new `UInt16` ClickHouse value
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/int-uint
 */
export const uint16 = ({
  description,
  default: defaultVal,
}: {
  description?: string;
  default?: number;
} = {}): CHUInt16 => ({
  type: DataTypes.UInt16,
  description,
  default: defaultVal,
  typeScriptType: defaultVal!,
});
