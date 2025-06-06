import { int8 } from "../_mod.ts";
import { assertDataTypeEquals } from "./_assert-data-type-equals.test.ts";
import { json } from "./json.ts";
import { string } from "./string.ts";

Deno.test("JSON | Simple", () => assertDataTypeEquals(json(), "JSON()"));

Deno.test("JSON | Full", () =>
  assertDataTypeEquals(
    json({
      maxDynamicPaths: 25,
      maxDynamicTypes: 5,
      typedPaths: {
        hello: int8(),
        "my.world": string(),
      },
      skipPaths: ["unwanted"],
      skipPathsRegex: [/un(charted|wanted)/],
    }),
    "JSON(max_dynamic_paths=25, max_dynamic_types=5, hello Int8, my.world String, SKIP unwanted, SKIP REGEXP 'un(charted|wanted)')",
  ));
