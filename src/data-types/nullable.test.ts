import { assertDataTypeEquals } from "./_assert-data-type-equals.test.ts";
import { nullable } from "./nullable.ts";
import { string } from "./string.ts";

Deno.test("Nullable", () =>
  assertDataTypeEquals(nullable({ itemType: string() }), "Nullable(String)"));
