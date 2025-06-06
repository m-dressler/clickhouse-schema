import { DataType, DataTypes } from "../../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/float */
export type CHFloat64 = DataType<DataTypes.Float64, number>;

/**
 * Creates a new `Float64` ClickHouse value
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/float
 */
export const float64 = ({
  description,
  default: defaultVal,
}: {
  description?: string;
  default?: number;
} = {}): CHFloat64 => ({
  type: DataTypes.Float64,
  description,
  default: defaultVal,
  typeScriptType: defaultVal!,
});
