import { type DataType, DataTypes } from "../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/ipv6 */
export type CHIPv6 = DataType<DataTypes.IPv6, string>;

/**
 * Creates a new `IPv6` ClickHouse value
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/ipv6
 */
export const ipv6 = (c?: {
  description?: string;
  default?: string;
}): CHIPv6 => ({
  type: DataTypes.IPv6,
  description: c?.description,
  default: c?.default,
  typeScriptType: c?.default!,
});
