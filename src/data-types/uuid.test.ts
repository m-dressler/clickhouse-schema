import { assertDataTypeEquals } from "./_assert-data-type-equals.test.ts";
import { uuid } from "./uuid.ts";

Deno.test("UUID", () => assertDataTypeEquals(uuid(), "UUID"));
