import { assertDataTypeEquals } from "../_assert-data-type-equals.test.ts";
import { uint64 } from "./uint64.ts";

Deno.test("UInt64", () => assertDataTypeEquals(uint64(), "UInt64"));
