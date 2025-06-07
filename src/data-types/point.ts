import { type DataType, DataTypes } from "../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/geo#point */
export type CHPoint = DataType<DataTypes.Point, [number, number]>;

/**
 * Creates a new `Point` ClickHouse value
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/geo#point
 */
export const point = ({
  description,
  default: defaultVal,
}: {
  description?: string;
  default?: [number, number];
} = {}): CHPoint => ({
  type: DataTypes.Point,
  typeScriptType: defaultVal!,
  description,
  default: defaultVal,
});
