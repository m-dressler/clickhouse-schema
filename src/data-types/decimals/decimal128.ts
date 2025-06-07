import { type DataType, DataTypes } from "../../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/decimal */
export type CHDecimal128 = DataType<DataTypes.Decimal128, number>;

/**
 * Creates a new `Decimal128` ClickHouse value
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/decimal
 */
export const decimal128 = (c: {
  scale: number;
  description?: string;
  default?: number;
}): CHDecimal128 => ({
  type: DataTypes.Decimal128,
  description: c.description,
  default: c.default,
  typeScriptType: c.default!,
  arguments: [c.scale],
});
