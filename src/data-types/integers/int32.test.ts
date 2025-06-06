import { assertDataTypeEquals } from "../_assert-data-type-equals.test.ts";
import { int32 } from "./int32.ts";

Deno.test("Int32", () => assertDataTypeEquals(int32(), "Int32"));
