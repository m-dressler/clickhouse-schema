import { type DataType, DataTypes } from "../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/geo#point */
export type CHPoint = DataType<DataTypes.Point, [number, number]>;

/**
 * Creates a new `Point` ClickHouse value
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/geo#point
 */
export const point = (c?: {
  description?: string;
  default?: [number, number];
}): CHPoint => ({
  type: DataTypes.Point,
  typeScriptType: c?.default!,
  description: c?.description,
  default: c?.default,
});
