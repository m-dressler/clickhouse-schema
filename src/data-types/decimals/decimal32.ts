import { type DataType, DataTypes } from "../../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/decimal */
export type CHDecimal32 = DataType<DataTypes.Decimal32, number>;

/**
 * Creates a new `Decimal32` ClickHouse value
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/decimal
 */
export const decimal32 = (c: {
  scale: number;
  description?: string;
  default?: number;
}): CHDecimal32 => ({
  type: DataTypes.Decimal32,
  description: c.description,
  default: c.default,
  typeScriptType: c.default!,
  arguments: [c.scale],
});
