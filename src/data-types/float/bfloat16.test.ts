import { assertDataTypeEquals } from "../_assert-data-type-equals.test.ts";
import { bfloat16 } from "./bfloat16.ts";

Deno.test("BFloat16", () => assertDataTypeEquals(bfloat16(), "BFloat16"));
