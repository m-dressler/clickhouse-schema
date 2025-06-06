import { assertDataTypeEquals } from "./_assert-data-type-equals.test.ts";
import { string } from "./string.ts";

Deno.test("String", () => assertDataTypeEquals(string(), "String"));
