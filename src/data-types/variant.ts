import { type AnyDataType, type DataType, DataTypes } from "../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/variant */
export type CHVariant<ItemTypes extends AnyDataType[]> = DataType<
  DataTypes.Variant,
  {
    [K in keyof ItemTypes]: ItemTypes[K] extends { typeScriptType: infer U } ? U
      : never;
  },
  ItemTypes
>;

/**
 * Creates a new `Variant(T1, T2, ...)` ClickHouse value of the provided types
 *
 * Make sure to use as const for the values for typescript to infer everything correctly
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/variant
 */
export const variant = <ItemTypes extends AnyDataType[]>(c: {
  itemTypes: ItemTypes;
  description?: string;
  default?: {
    [K in keyof ItemTypes]: ItemTypes[K] extends { typeScriptType: infer U } ? U
      : never;
  };
}): CHVariant<ItemTypes> => ({
  type: DataTypes.Variant,
  typeScriptType: c.itemTypes.map((i) => i.typeScriptType) as Exclude<
    typeof c.default,
    undefined
  >,
  innerTypes: c.itemTypes,
  description: c.description,
  default: c.default,
});
