import { assertDataTypeEquals } from "../_assert-data-type-equals.test.ts";
import { decimal128 } from "./decimal128.ts";

Deno.test("Decimal128", () =>
  assertDataTypeEquals(decimal128({ scale: 25 }), "Decimal128(25)"));
