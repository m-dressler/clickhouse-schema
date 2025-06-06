import { assertDataTypeEquals } from "../_assert-data-type-equals.test.ts";
import { uint32 } from "./uint32.ts";

Deno.test("UInt32", () => assertDataTypeEquals(uint32(), "UInt32"));
