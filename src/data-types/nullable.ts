import { type DataType, DataTypes } from "../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/nullable */
export type CHNullable<ItemType extends DataType<DataTypes, unknown>> =
  DataType<DataTypes.Nullable, ItemType["typeScriptType"] | null, [ItemType]>;

/**
 * Creates a new `Nullable(T)` ClickHouse value of the provided type
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/nullable
 */
export const nullable = <ItemType extends DataType<DataTypes, unknown>>({
  itemType,
  description,
  default: defaultVal,
}: {
  itemType: ItemType;
  description?: string;
  default?: ItemType["typeScriptType"];
}): CHNullable<ItemType> => ({
  type: DataTypes.Nullable,
  typeScriptType: itemType.typeScriptType || null,
  innerTypes: [itemType],
  description,
  default: defaultVal,
});
