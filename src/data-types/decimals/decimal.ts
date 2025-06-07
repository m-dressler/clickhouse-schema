import { type DataType, DataTypes } from "../../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/decimal */
export type CHDecimal = DataType<DataTypes.Decimal, number>;

/**
 * Creates a new `Decimal` ClickHouse value
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/decimal
 */
export const decimal = (c: {
  precision: number;
  scale: number;
  description?: string;
  default?: number;
}): CHDecimal => ({
  type: DataTypes.Decimal,
  description: c.description,
  default: c.default,
  typeScriptType: c.default!,
  arguments: [c.precision, c.scale],
});
