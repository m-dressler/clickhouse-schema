import { type DataType, DataTypes } from "../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/uuid */
export type CHUUID = DataType<DataTypes.UUID, string>;

/**
 * Creates a new `UUID` ClickHouse value
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/uuid
 */
export const uuid = ({
  description,
  default: defaultVal,
}: {
  description?: string;
  default?: string;
} = {}): CHUUID => ({
  type: DataTypes.UUID,
  description,
  default: defaultVal,
  typeScriptType: defaultVal!,
});
