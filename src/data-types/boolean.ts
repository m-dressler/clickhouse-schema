import { type DataType, DataTypes } from "../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/boolean */
export type CHBoolean = DataType<DataTypes.Boolean, boolean>;

/**
 * Creates a new `Boolean` ClickHouse value
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/boolean
 */
export const boolean = ({
  description,
  default: defaultVal,
}: {
  description?: string;
  default?: boolean;
} = {}): CHBoolean => ({
  type: DataTypes.Boolean,
  description,
  default: defaultVal,
  typeScriptType: defaultVal!,
});
