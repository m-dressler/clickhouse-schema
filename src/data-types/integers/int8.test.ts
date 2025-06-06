import { assertDataTypeEquals } from "../_assert-data-type-equals.test.ts";
import { int8 } from "./int8.ts";

Deno.test("Int8", () => assertDataTypeEquals(int8(), "Int8"));
