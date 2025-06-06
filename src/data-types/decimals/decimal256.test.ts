import { assertDataTypeEquals } from "../_assert-data-type-equals.test.ts";
import { decimal256 } from "./decimal256.ts";

Deno.test("Decimal256", () =>
  assertDataTypeEquals(decimal256({ scale: 25 }), "Decimal256(25)"));
