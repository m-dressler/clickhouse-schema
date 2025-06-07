import { assertStrictEquals } from "jsr:@std/assert/strict-equals";
import type { AnyDataType } from "../_mod.ts";
import { stringifyDataType } from "../stringify-data-type.ts";

/** Stringified the {@link dataType} and strict asserts it equals the expected value */
export const assertDataTypeEquals = (
  dataType: AnyDataType,
  expected: string,
) => {
  assertStrictEquals(stringifyDataType(dataType), expected);
};
