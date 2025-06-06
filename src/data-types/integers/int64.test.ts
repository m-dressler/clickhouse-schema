import { assertDataTypeEquals } from "../_assert-data-type-equals.test.ts";
import { int64 } from "./int64.ts";

Deno.test("Int64", () => assertDataTypeEquals(int64(), "Int64"));
