# @md/clickhouse-schema

Allows managing your ClickHouse schema in typescript with type inference and
table creation query generation.

## Example

```ts
import * as CH from "@md/clickhouse-schema";

const SCHEMA = {
  id: CH.uint64(),
  name: CH.lowCardinality({
    itemType: CH.string(),
    description: "`<FIRST_NAME> <LAST_NAME>` combined",
  }),
  date_of_birth: CH.dateTime({
    timezone: "UTC",
    default: new Date(),
  }),
  family: CH.tuple(
    itemTypes: [
      ["mother", uint16()],
      ["father", uint8()],
    ] as const, // <- This is important if you want the full type inference
  )
} as const satisfies CH.Schema;

type Schema = CH.infer<typeof SCHEMA>;

const query = CH.toCreateTableQuery({
  tableName: "users",
  schema: SCHEMA,
  orderBy: ["id"],
  // engine: "MergeTree",
  // partitionBy: ["toYYYYMM(date_of_birth)"],
  // database: "user_db",
  // cluster: "user_cluster",
});
```
