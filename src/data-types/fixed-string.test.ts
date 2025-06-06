import { assertDataTypeEquals } from "./_assert-data-type-equals.test.ts";
import { fixedString } from "./fixed-string.ts";

Deno.test("FixedString", () =>
  assertDataTypeEquals(fixedString({ length: 3 }), "FixedString(3)"));
