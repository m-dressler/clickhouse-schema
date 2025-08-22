import { assertDataTypeEquals } from "../_assert-data-type-equals.test.ts";
import { int64 } from "../integers/int64.ts";
import { uint32 } from "../integers/uint32.ts";
import { string } from "../string.ts";
import { aggregateFunction } from "./aggregateFunction.ts";

Deno.test("AggregateFunction | count", () =>
  assertDataTypeEquals(
    aggregateFunction({ funcType: "count" }),
    "AggregateFunction(count)",
  ));

Deno.test("AggregateFunction | sum with Int64", () =>
  assertDataTypeEquals(
    aggregateFunction({ funcType: "sum", argTypes: [int64()] }),
    "AggregateFunction(sum, Int64)",
  ));

Deno.test("AggregateFunction | uniq with String", () =>
  assertDataTypeEquals(
    aggregateFunction({ funcType: "uniq", argTypes: [string()] }),
    "AggregateFunction(uniq, String)",
  ));

Deno.test("AggregateFunction | avg with UInt32", () =>
  assertDataTypeEquals(
    aggregateFunction({ funcType: "avg", argTypes: [uint32()] }),
    "AggregateFunction(avg, UInt32)",
  ));

Deno.test("AggregateFunction | groupArray with String", () =>
  assertDataTypeEquals(
    aggregateFunction({ funcType: "groupArray", argTypes: [string()] }),
    "AggregateFunction(groupArray, String)",
  ));

Deno.test("AggregateFunction | argMin with multiple arguments", () =>
  assertDataTypeEquals(
    aggregateFunction({
      funcType: "argMin",
      argTypes: [string(), int64()],
    }),
    "AggregateFunction(argMin, String, Int64)",
  ));
