import { int8 } from "../_mod.ts";
import { assertDataTypeEquals } from "./_assert-data-type-equals.test.ts";
import { string } from "./string.ts";
import { tuple } from "./tuple.ts";

Deno.test("Tuple", () =>
  assertDataTypeEquals(
    tuple({
      itemTypes: [
        ["name", string()],
        ["age", int8()],
      ] as const,
    }),
    "Tuple(name String, age Int8)",
  ));
