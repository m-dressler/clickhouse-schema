import { int8 } from "../_mod.ts";
import { assertDataTypeEquals } from "./_assert-data-type-equals.test.ts";
import { string } from "./string.ts";
import { tuple } from "./tuple.ts";

Deno.test("Tuple", () =>
  assertDataTypeEquals(
    tuple({ itemTypes: [string(), int8()] as const }),
    "Tuple(String, Int8)",
  ));
