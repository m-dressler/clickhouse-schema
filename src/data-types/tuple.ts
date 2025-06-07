import { type AnyDataType, type DataType, DataTypes } from "../_mod.ts";
import { literal, stringifyDataType } from "../stringify-data-type.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/tuple */
export type CHTuple<Tuple extends [name: string, type: AnyDataType][]> =
  DataType<
    DataTypes.Tuple,
    { [K in keyof Tuple]: Tuple[K][1]["typeScriptType"] },
    { [K in keyof Tuple]: Tuple[K][1] }
  >;

/**
 * Creates a new `Tuple(T1, T2, ...)` ClickHouse value of the provided types
 *
 * Make sure to use as const for the values for typescript to infer everything correctly
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/tuple
 */
export const tuple = <Tuple extends [name: string, type: AnyDataType][]>(c: {
  itemTypes: Tuple;
  description?: string;
  default?: { [K in keyof Tuple]: Tuple[K][1]["typeScriptType"] };
}): CHTuple<Tuple> => ({
  type: DataTypes.Tuple,
  typeScriptType: c.itemTypes.map(
    ([_, type]) => type.typeScriptType,
  ) as Exclude<typeof c.default, undefined>,
  innerTypes: c.itemTypes.map(([_, type]) => type) as {
    [K in keyof Tuple]: Tuple[K][1];
  },
  arguments: c.itemTypes.map(([name, type]) =>
    literal(`${name} ${stringifyDataType(type)}`)
  ),
  description: c.description,
  default: c.default,
});
