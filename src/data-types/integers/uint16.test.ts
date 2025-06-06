import { assertDataTypeEquals } from "../_assert-data-type-equals.test.ts";
import { uint16 } from "./uint16.ts";

Deno.test("UInt16", () => assertDataTypeEquals(uint16(), "UInt16"));
