import { type DataType, DataTypes } from "../../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/float */
export type CHBFloat16 = DataType<DataTypes.BFloat16, number>;

/**
 * Creates a new `BFloat16` ClickHouse value
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/float
 */
export const bfloat16 = ({
  description,
  default: defaultVal,
}: {
  description?: string;
  default?: number;
} = {}): CHBFloat16 => ({
  type: DataTypes.BFloat16,
  description,
  default: defaultVal,
  typeScriptType: defaultVal!,
});
