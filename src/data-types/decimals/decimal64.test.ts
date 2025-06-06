import { assertDataTypeEquals } from "../_assert-data-type-equals.test.ts";
import { decimal64 } from "./decimal64.ts";

Deno.test("Decimal64", () =>
  assertDataTypeEquals(decimal64({ scale: 25 }), "Decimal64(25)"));
