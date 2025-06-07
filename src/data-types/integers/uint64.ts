import { type DataType, DataTypes } from "../../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/int-uint */
export type CHUInt64 = DataType<DataTypes.UInt64, number>;

/**
 * Creates a new `UInt64` ClickHouse value
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/int-uint
 */
export const uint64 = ({
  description,
  default: defaultVal,
}: {
  description?: string;
  default?: number;
} = {}): CHUInt64 => ({
  type: DataTypes.UInt64,
  description,
  default: defaultVal,
  typeScriptType: defaultVal!,
});
