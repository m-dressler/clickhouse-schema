import { assertDataTypeEquals } from "../_assert-data-type-equals.test.ts";
import { uint256 } from "./uint256.ts";

Deno.test("UInt256", () => assertDataTypeEquals(uint256(), "UInt256"));
