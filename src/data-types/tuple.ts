import { AnyDataType, DataType, DataTypes } from "../_mod.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/tuple */
export type CHTuple<ItemTypes extends AnyDataType[]> = DataType<
  DataTypes.Tuple,
  {
    [K in keyof ItemTypes]: ItemTypes[K] extends { typeScriptType: infer U } ? U
      : never;
  },
  ItemTypes
>;

/**
 * Creates a new `Tuple(T1, T2, ...)` ClickHouse value of the provided types
 *
 * Make sure to use as const for the values for typescript to infer everything correctly
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/tuple
 */
export const tuple = <ItemTypes extends AnyDataType[]>({
  itemTypes,
  description,
  default: defaultVal,
}: {
  itemTypes: ItemTypes;
  description?: string;
  default?: {
    [K in keyof ItemTypes]: ItemTypes[K] extends { typeScriptType: infer U } ? U
      : never;
  };
}): CHTuple<ItemTypes> => ({
  type: DataTypes.Tuple,
  typeScriptType: itemTypes.map((i) => i.typeScriptType) as Exclude<
    typeof defaultVal,
    undefined
  >,
  innerTypes: itemTypes,
  description,
  default: defaultVal,
});
