import { assertDataTypeEquals } from "../_assert-data-type-equals.test.ts";
import { decimal } from "./decimal.ts";

Deno.test("Decimal", () =>
  assertDataTypeEquals(decimal({ scale: 25, precision: 3 }), "Decimal(3, 25)"));
