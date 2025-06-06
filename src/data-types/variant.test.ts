import { int8 } from "../_mod.ts";
import { assertDataTypeEquals } from "./_assert-data-type-equals.test.ts";
import { string } from "./string.ts";
import { variant } from "./variant.ts";

Deno.test("Variant", () =>
  assertDataTypeEquals(
    variant({ itemTypes: [string(), int8()] as const }),
    "Variant(String, Int8)",
  ));
