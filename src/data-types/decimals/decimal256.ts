import { DataType, DataTypes } from "../../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/decimal */
export type CHDecimal256 = DataType<DataTypes.Decimal256, number>;

/**
 * Creates a new `Decimal256` ClickHouse value
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/decimal
 */
export const decimal256 = ({
  scale,
  description,
  default: defaultVal,
}: {
  scale: number;
  description?: string;
  default?: number;
}): CHDecimal256 => ({
  type: DataTypes.Decimal256,
  description,
  default: defaultVal,
  typeScriptType: defaultVal!,
  arguments: [scale],
});
