import { type DataType, DataTypes } from "../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/string */
export type CHString = DataType<DataTypes.String, string>;

/**
 * Creates a new `String` ClickHouse value
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/string
 */
export const string = ({
  description,
  default: defaultVal,
}: {
  description?: string;
  default?: string;
} = {}): CHString => ({
  type: DataTypes.String,
  description,
  default: defaultVal,
  typeScriptType: defaultVal!,
});
