import { DataType, DataTypes } from "../../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/decimal */
export type CHDecimal = DataType<DataTypes.Decimal, number>;

/**
 * Creates a new `Decimal` ClickHouse value
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/decimal
 */
export const decimal = ({
  precision,
  scale,
  description,
  default: defaultVal,
}: {
  precision: number;
  scale: number;
  description?: string;
  default?: number;
}): CHDecimal => ({
  type: DataTypes.Decimal,
  description,
  default: defaultVal,
  typeScriptType: defaultVal!,
  arguments: [precision, scale],
});
