import { type DataType, DataTypes } from "../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/enum */
export type CHEnum<Map extends Record<string, number>> = DataType<
  DataTypes.Enum,
  keyof Map
>;

/**
 * Creates a new `Enum(T)` ClickHouse value of the provided type
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/enum
 */
const chEnum = <Map extends Record<string, number>>(c: {
  enumMap: Map;
  description?: string;
  default?: keyof Map;
}): CHEnum<Map> => ({
  type: DataTypes.Enum,
  typeScriptType: 0 as unknown as keyof Map,
  description: c.description,
  default: c.default,
  arguments: [c.enumMap],
});

export { chEnum as enum };
