import { assertDataTypeEquals } from "./_assert-data-type-equals.test.ts";
import { array } from "./array.ts";
import { string } from "./string.ts";

Deno.test("Array | Simple", () =>
  assertDataTypeEquals(array({ itemType: string() }), "Array(String)"));

Deno.test("Array | Nested", () =>
  assertDataTypeEquals(
    array({ itemType: array({ itemType: string() }) }),
    "Array(Array(String))",
  ));
