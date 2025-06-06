import { assertDataTypeEquals } from "../_assert-data-type-equals.test.ts";
import { float32 } from "./float32.ts";

Deno.test("Float32", () => assertDataTypeEquals(float32(), "Float32"));
