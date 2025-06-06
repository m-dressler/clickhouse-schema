import { assertDataTypeEquals } from "./_assert-data-type-equals.test.ts";
import { boolean } from "./boolean.ts";

Deno.test("Boolean", () => assertDataTypeEquals(boolean(), "Boolean"));
