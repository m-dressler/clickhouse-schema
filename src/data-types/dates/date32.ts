import { type DataType, DataTypes } from "../../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/date32 */
export type CHDate32 = DataType<DataTypes.Date32, string>;

/**
 * Creates a new `Date32` ClickHouse value
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/date32
 */
export const date32 = (c?: {
  description?: string;
  default?: string;
}): CHDate32 => ({
  type: DataTypes.Date32,
  description: c?.description,
  default: c?.default,
  typeScriptType: c?.default!,
});
