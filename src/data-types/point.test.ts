import { assertDataTypeEquals } from "./_assert-data-type-equals.test.ts";
import { point } from "./point.ts";

Deno.test("Point", () => assertDataTypeEquals(point(), "Point"));
