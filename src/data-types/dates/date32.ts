import { DataType, DataTypes } from "../../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/date32 */
export type CHDate32 = DataType<DataTypes.Date32, Date>;

/**
 * Creates a new `Date32` ClickHouse value
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/date32
 */
export const date32 = ({
  description,
  default: defaultVal,
}: {
  description?: string;
  default?: Date;
} = {}): CHDate32 => ({
  type: DataTypes.Date32,
  description,
  default: defaultVal,
  typeScriptType: defaultVal!,
});
