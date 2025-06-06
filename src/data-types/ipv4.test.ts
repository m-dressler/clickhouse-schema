import { assertDataTypeEquals } from "./_assert-data-type-equals.test.ts";
import { ipv4 } from "./ipv4.ts";

Deno.test("IPv4", () => assertDataTypeEquals(ipv4(), "IPv4"));
