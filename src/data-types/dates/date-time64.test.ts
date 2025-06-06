import { assertDataTypeEquals } from "../_assert-data-type-equals.test.ts";
import { dateTime64 } from "./date-time64.ts";

Deno.test("DateTime64", () =>
  assertDataTypeEquals(
    dateTime64({ timezone: "UTC", precision: 3 }),
    "DateTime64(3, 'UTC')",
  ));
