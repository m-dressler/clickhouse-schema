import { DataType, DataTypes } from "../../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/int-uint */
export type CHInt8 = DataType<DataTypes.Int8, number>;

/**
 * Creates a new `Int8` ClickHouse value
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/int-uint
 */
export const int8 = ({
  description,
  default: defaultVal,
}: {
  description?: string;
  default?: number;
} = {}): CHInt8 => ({
  type: DataTypes.Int8,
  description,
  default: defaultVal,
  typeScriptType: defaultVal!,
});
