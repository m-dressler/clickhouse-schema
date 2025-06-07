import { type DataType, DataTypes } from "../../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/datetime */
export type CHDateTime = DataType<DataTypes.DateTime, Date>;

/**
 * Creates a new `DateTime` ClickHouse value in the provided timezone
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/datetime
 */
export const dateTime = ({
  timezone,
  description,
  default: defaultVal,
}: {
  timezone: string;
  description?: string;
  default?: Date;
}): CHDateTime => ({
  type: DataTypes.DateTime,
  description,
  default: defaultVal,
  typeScriptType: defaultVal!,
  arguments: [timezone],
});
