import { assertDataTypeEquals } from "../_assert-data-type-equals.test.ts";
import { int256 } from "./int256.ts";

Deno.test("Int256", () => assertDataTypeEquals(int256(), "Int256"));
