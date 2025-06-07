import { type DataType, DataTypes } from "../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/nullable */
export type CHNullable<ItemType extends DataType<DataTypes, unknown>> =
  DataType<DataTypes.Nullable, ItemType["typeScriptType"] | null, [ItemType]>;

/**
 * Creates a new `Nullable(T)` ClickHouse value of the provided type
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/nullable
 */
export const nullable = <ItemType extends DataType<DataTypes, unknown>>(c: {
  itemType: ItemType;
  description?: string;
  default?: ItemType["typeScriptType"];
}): CHNullable<ItemType> => ({
  type: DataTypes.Nullable,
  typeScriptType: c.itemType.typeScriptType || null,
  innerTypes: [c.itemType],
  description: c.description,
  default: c.default,
});
