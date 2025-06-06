import { assertDataTypeEquals } from "../_assert-data-type-equals.test.ts";
import { decimal32 } from "./decimal32.ts";

Deno.test("Decimal32", () =>
  assertDataTypeEquals(decimal32({ scale: 25 }), "Decimal32(25)"));
