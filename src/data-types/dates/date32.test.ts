import { assertDataTypeEquals } from "../_assert-data-type-equals.test.ts";
import { date32 } from "./date32.ts";

Deno.test("Date32", () => assertDataTypeEquals(date32(), "Date32"));
