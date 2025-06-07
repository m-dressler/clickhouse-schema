import { type DataType, DataTypes } from "../../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/datetime64 */
export type CHDateTime64 = DataType<DataTypes.DateTime64, Date>;

/**
 * Creates a new `DateTime` ClickHouse value with the provided precision in the provided timezone
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/datetime64
 */
export const dateTime64 = ({
  timezone,
  precision,
  description,
  default: defaultVal,
}: {
  precision: number;
  timezone: string;
  description?: string;
  default?: Date;
}): CHDateTime64 => ({
  type: DataTypes.DateTime64,
  description,
  default: defaultVal,
  typeScriptType: defaultVal!,
  arguments: [precision, timezone],
});
