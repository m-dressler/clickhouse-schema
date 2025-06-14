import { type DataType, DataTypes } from "../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/ipv4 */
export type CHIPv4 = DataType<DataTypes.IPv4, string>;

/**
 * Creates a new `IPv4` ClickHouse value
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/ipv4
 */
export const ipv4 = (c?: {
  description?: string;
  default?: string;
}): CHIPv4 => ({
  type: DataTypes.IPv4,
  description: c?.description,
  default: c?.default,
  typeScriptType: c?.default!,
});
