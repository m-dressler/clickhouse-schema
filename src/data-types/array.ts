import { AnyDataType, DataType, DataTypes } from "../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/array */
export type CHArray<ItemType extends AnyDataType> = DataType<
  DataTypes.Array,
  Array<ItemType["typeScriptType"]>,
  [ItemType]
>;

/**
 * Creates a new `Array(T)` ClickHouse value of the provided type
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/array
 */
export const array = <ItemType extends AnyDataType>({
  itemType,
  description,
  default: defaultVal,
}: {
  itemType: ItemType;
  description?: string;
  default?: Array<ItemType["typeScriptType"]>;
}): CHArray<ItemType> => ({
  type: DataTypes.Array,
  typeScriptType: [itemType.typeScriptType] as Array<
    ItemType["typeScriptType"]
  >,
  innerTypes: [itemType],
  description,
  default: defaultVal,
});
