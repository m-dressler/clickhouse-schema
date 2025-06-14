import { type DataType, DataTypes } from "../../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/float */
export type CHFloat32 = DataType<DataTypes.Float32, number>;

/**
 * Creates a new `Float32` ClickHouse value
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/float
 */
export const float32 = (c?: {
  description?: string;
  default?: number;
}): CHFloat32 => ({
  type: DataTypes.Float32,
  description: c?.description,
  default: c?.default,
  typeScriptType: c?.default!,
});
