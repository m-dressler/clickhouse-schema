import { type AnyDataType, type DataType, DataTypes } from "../../_mod.ts";
import { literal, stringifyDataType } from "../../stringify-data-type.ts";

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

/** Helper type to make TypeScript show some helpful type descriptor of {@link CHAggregateFunction} */
type AggregateFunction<Type extends FunctionTypes, Arguments> = {
  functionType: Type;
  argumentTypes: Arguments;
};

/** Helper type to convert an aggregate function to the {@link AggregateFunction} TypeScript helper type */
type AggregateFunctionToTs<
  Type extends FunctionTypes,
  ArgumentTypes extends AnyDataType[]
> = AggregateFunction<
  Type,
  ArgumentTypes[number] extends DataType<
    DataTypes,
    infer R,
    AnyDataType[] | undefined
  >
    ? R
    : unknown
>;

/** @see https://clickhouse.com/docs/sql-reference/data-types/aggregatefunction */
export type CHAggregateFunction<
  Type extends FunctionTypes,
  ArgumentTypes extends AnyDataType[]
> = DataType<
  DataTypes.AggregateFunction,
  AggregateFunctionToTs<Type, ArgumentTypes>,
  ArgumentTypes
>;

/**
 * Creates a new `AggregateFunction(function_name, types_of_arguments...)` ClickHouse value
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/aggregatefunction
 */
export const aggregateFunction = <
  Type extends FunctionTypes,
  ArgumentTypes extends AnyDataType[]
>(c: {
  funcType: Type;
  argTypes?: ArgumentTypes;
  description?: string;
  default?: unknown;
}): CHAggregateFunction<Type, ArgumentTypes> => {
  const args = [literal(c.funcType)];
  if (c.argTypes && c.argTypes.length > 0) {
    args.push(...c.argTypes.map((t) => literal(stringifyDataType(t))));
  }

  return {
    type: DataTypes.AggregateFunction,
    typeScriptType: undefined as unknown as AggregateFunctionToTs<
      Type,
      ArgumentTypes
    >,
    innerTypes: c.argTypes,
    arguments: args,
    description: c.description,
    default: c.default,
  };
};
