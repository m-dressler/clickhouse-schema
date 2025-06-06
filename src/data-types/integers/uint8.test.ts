import { assertDataTypeEquals } from "../_assert-data-type-equals.test.ts";
import { uint8 } from "./uint8.ts";

Deno.test("UInt8", () => assertDataTypeEquals(uint8(), "UInt8"));
