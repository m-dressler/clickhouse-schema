import { assertDataTypeEquals } from "../_assert-data-type-equals.test.ts";
import { dateTime } from "./date-time.ts";

Deno.test("DateTime", () =>
  assertDataTypeEquals(dateTime({ timezone: "UTC" }), "DateTime('UTC')"));
