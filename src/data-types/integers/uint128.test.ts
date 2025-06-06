import { assertDataTypeEquals } from "../_assert-data-type-equals.test.ts";
import { uint128 } from "./uint128.ts";

Deno.test("UInt128", () => assertDataTypeEquals(uint128(), "UInt128"));
