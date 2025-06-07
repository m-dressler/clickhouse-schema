import { type DataType, DataTypes } from "../../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/decimal */
export type CHDecimal64 = DataType<DataTypes.Decimal64, number>;

/**
 * Creates a new `Decimal64` ClickHouse value
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/decimal
 */
export const decimal64 = (c: {
  scale: number;
  description?: string;
  default?: number;
}): CHDecimal64 => ({
  type: DataTypes.Decimal64,
  description: c.description,
  default: c.default,
  typeScriptType: c.default!,
  arguments: [c.scale],
});
