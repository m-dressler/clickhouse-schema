import { assertDataTypeEquals } from "./_assert-data-type-equals.test.ts";
import { dynamic } from "./dynamic.ts";

Deno.test("Dynamic", () =>
  assertDataTypeEquals(dynamic({ maxTypes: 5 }), "Dynamic(5)"));
