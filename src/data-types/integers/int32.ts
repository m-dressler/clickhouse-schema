import { type DataType, DataTypes } from "../../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/int-uint */
export type CHInt32 = DataType<DataTypes.Int32, number>;

/**
 * Creates a new `Int32` ClickHouse value
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/int-uint
 */
export const int32 = ({
  description,
  default: defaultVal,
}: {
  description?: string;
  default?: number;
} = {}): CHInt32 => ({
  type: DataTypes.Int32,
  description,
  default: defaultVal,
  typeScriptType: defaultVal!,
});
