import { type DataType, DataTypes } from "../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/uuid */
export type CHUUID = DataType<DataTypes.UUID, string>;

/**
 * Creates a new `UUID` ClickHouse value
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/uuid
 */
export const uuid = (c?: {
  description?: string;
  default?: string;
}): CHUUID => ({
  type: DataTypes.UUID,
  description: c?.description,
  default: c?.default,
  typeScriptType: c?.default!,
});
