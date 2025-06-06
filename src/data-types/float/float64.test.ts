import { assertDataTypeEquals } from "../_assert-data-type-equals.test.ts";
import { float64 } from "./float64.ts";

Deno.test("Float64", () => assertDataTypeEquals(float64(), "Float64"));
