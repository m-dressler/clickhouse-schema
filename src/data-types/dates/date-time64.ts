import { type DataType, DataTypes } from "../../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/datetime64 */
export type CHDateTime64 = DataType<DataTypes.DateTime64, string>;

/**
 * Creates a new `DateTime` ClickHouse value with the provided precision in the provided timezone
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/datetime64
 */
export const dateTime64 = (c: {
  precision: number;
  timezone: string;
  description?: string;
  default?: string;
}): CHDateTime64 => ({
  type: DataTypes.DateTime64,
  description: c.description,
  default: c.default,
  typeScriptType: c.default!,
  arguments: [c.precision, c.timezone],
});
