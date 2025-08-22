import { type AnyDataType, type DataType, DataTypes } from "../../_mod.ts";
import { literal, stringifyDataType } from "../../stringify-data-type.ts";

/** @see https://clickhouse.com/docs/sql-reference/data-types/aggregatefunction */
export type CHAggregateFunction<ArgumentTypes extends AnyDataType[]> = DataType<
  DataTypes.AggregateFunction,
  unknown,
  ArgumentTypes
>;

export type FunctionTypes =
  | "count"
  | "uniq"
  | "sum"
  | "avg"
  | "min"
  | "max"
  | "groupArray"
  | "groupUniqArray"
  | "quantile"
  | "argMin"
  | "argMax";

/**
 * Creates a new `AggregateFunction(function_name, types_of_arguments...)` ClickHouse value
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/aggregatefunction
 */
export const aggregateFunction = <ArgumentTypes extends AnyDataType[]>(c: {
  funcType: FunctionTypes;
  argTypes?: ArgumentTypes;
  description?: string;
  default?: unknown;
}): CHAggregateFunction<ArgumentTypes> => {
  const args = [literal(c.funcType)];
  if (c.argTypes && c.argTypes.length > 0) {
    args.push(...c.argTypes.map((t) => literal(stringifyDataType(t))));
  }

  return {
    type: DataTypes.AggregateFunction,
    typeScriptType: undefined as unknown,
    innerTypes: c.argTypes,
    arguments: args,
    description: c.description,
    default: c.default,
  };
};
