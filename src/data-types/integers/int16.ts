import { type DataType, DataTypes } from "../../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/int-uint */
export type CHInt16 = DataType<DataTypes.Int16, number>;

/**
 * Creates a new `Int16` ClickHouse value
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/int-uint
 */
export const int16 = (c?: {
  description?: string;
  default?: number;
}): CHInt16 => ({
  type: DataTypes.Int16,
  description: c?.description,
  default: c?.default,
  typeScriptType: c?.default!,
});
