import { assertDataTypeEquals } from "./_assert-data-type-equals.test.ts";
import { lowCardinality } from "./low-cardinality.ts";
import { string } from "./string.ts";

Deno.test("LowCardinality", () =>
  assertDataTypeEquals(
    lowCardinality({ itemType: string() }),
    "LowCardinality(String)",
  ));
