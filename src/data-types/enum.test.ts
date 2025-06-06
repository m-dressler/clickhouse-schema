import { assertDataTypeEquals } from "./_assert-data-type-equals.test.ts";
import { enum as _enum } from "./enum.ts";

Deno.test("Enum", () =>
  assertDataTypeEquals(
    _enum({
      enumMap: {
        A: 1,
        B: 4,
        C: 2,
      },
    }),
    "Enum('A' = 1, 'B' = 4, 'C' = 2)",
  ));
