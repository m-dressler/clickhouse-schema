import { assertDataTypeEquals } from "../_assert-data-type-equals.test.ts";
import { int128 } from "./int128.ts";

Deno.test("Int128", () => assertDataTypeEquals(int128(), "Int128"));
