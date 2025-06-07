import { type DataType, DataTypes } from "../../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/date */
export type CHDate = DataType<DataTypes.Date, Date>;

/**
 * Creates a new `Date` ClickHouse value
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/date
 */
export const date = ({
  description,
  default: defaultVal,
}: { description?: string; default?: Date } = {}): CHDate => ({
  type: DataTypes.Date,
  description,
  default: defaultVal,
  typeScriptType: defaultVal!,
});
