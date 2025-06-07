import { type DataType, DataTypes } from "../../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/int-uint */
export type CHInt256 = DataType<DataTypes.Int256, number>;

/**
 * Creates a new `Int256` ClickHouse value
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/int-uint
 */
export const int256 = ({
  description,
  default: defaultVal,
}: {
  description?: string;
  default?: number;
} = {}): CHInt256 => ({
  type: DataTypes.Int256,
  description,
  default: defaultVal,
  typeScriptType: defaultVal!,
});
