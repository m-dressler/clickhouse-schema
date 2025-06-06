import { assertDataTypeEquals } from "./_assert-data-type-equals.test.ts";
import { ipv6 } from "./ipv6.ts";

Deno.test("IPv6", () => assertDataTypeEquals(ipv6(), "IPv6"));
