import { assertDataTypeEquals } from "../_assert-data-type-equals.test.ts";
import { int16 } from "./int16.ts";

Deno.test("Int16", () => assertDataTypeEquals(int16(), "Int16"));
