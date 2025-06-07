import { type DataType, DataTypes } from "../../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/float */
export type CHBFloat16 = DataType<DataTypes.BFloat16, number>;

/**
 * Creates a new `BFloat16` ClickHouse value
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/float
 */
export const bfloat16 = (c?: {
  description?: string;
  default?: number;
}): CHBFloat16 => ({
  type: DataTypes.BFloat16,
  description: c?.description,
  default: c?.default,
  typeScriptType: c?.default!,
});
