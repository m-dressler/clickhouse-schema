import { type DataType, DataTypes } from "../../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/date */
export type CHDate = DataType<DataTypes.Date, Date>;

/**
 * Creates a new `Date` ClickHouse value
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/date
 */
export const date = (c?: { description?: string; default?: Date }): CHDate => ({
  type: DataTypes.Date,
  description: c?.description,
  default: c?.default,
  typeScriptType: c?.default!,
});
