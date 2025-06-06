import { assertDataTypeEquals } from "../_assert-data-type-equals.test.ts";
import { date } from "./date.ts";

Deno.test("Date", () => assertDataTypeEquals(date(), "Date"));
