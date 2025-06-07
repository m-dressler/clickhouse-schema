import { type AnyDataType, DataTypes } from "./_mod.ts";

/** Symbol used to mark a string as a literal value */
const LITERAL = Symbol("LITERAL");

/** Makes arguments in data types literal, i.e., not wrapping the string in quotes */
export const literal = (value: string) => ({ [LITERAL]: value });

/** Represents a string value that shouldn't be wrapped in quotes */
export type Literal = { [LITERAL]: string };

/** Converts a DataType argument into its stringified representation */
const stringifyArgument = (
  arg: string | Literal | number | Record<string, string | number>,
): string => {
  if (typeof arg === "string") return `'${arg}'`;
  else if (typeof arg !== "object") return arg + "";
  else if (LITERAL in arg) return arg[LITERAL];
  else typeof arg === "object";
  return Object.entries(arg)
    .map(([k, v]) => `'${k}' = ${stringifyArgument(v)}`)
    .join(", ");
};

/** Stringifies a `DataType` into its CREATE TABLE column definition */
export const stringifyDataType = (dataType: AnyDataType): string => {
  let str = DataTypes[dataType.type];
  if (dataType.arguments) {
    str += `(${dataType.arguments.map(stringifyArgument).join(", ")})`;
  } else if (dataType.innerTypes) {
    str += `(${dataType.innerTypes.map(stringifyDataType).join(", ")})`;
  }
  return str;
};
