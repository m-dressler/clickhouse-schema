import { assertStrictEquals } from "jsr:@std/assert";
import { array, dateTime, json, lowCardinality, uint64 } from "./_mod.ts";
import { toCreateTableQuery } from "./create-table-statement.ts";
import { uint8 } from "./data-types/integers/uint8.ts";
import { string } from "./data-types/string.ts";
import { uuid } from "./data-types/uuid.ts";

Deno.test("Query Generation | Basic", () => {
  const query = toCreateTableQuery({
    tableName: "users",
    schema: {
      id: uuid(),
      name: string(),
      email: string(),
      age: uint8(),
    },
    orderBy: ["id"],
  });
  assertStrictEquals(
    query,
    `CREATE TABLE IF NOT EXISTS users
(
  id UUID,
  name String,
  email String,
  age UInt8
)
ENGINE = MergeTree()
ORDER BY (id);`,
  );
});

Deno.test("Query Generation | Default Fields", () => {
  const query = toCreateTableQuery({
    tableName: "users",
    schema: {
      id: uuid(),
      name: string({ default: "John Doe" }),
      email: string({ default: "john@gmail.com" }),
      age: uint8(),
    },
    orderBy: ["id"],
  });
  assertStrictEquals(
    query,
    `CREATE TABLE IF NOT EXISTS users
(
  id UUID,
  name String DEFAULT 'John Doe',
  email String DEFAULT 'john@gmail.com',
  age UInt8
)
ENGINE = MergeTree()
ORDER BY (id);`,
  );
});

Deno.test("Query Generation | Partition By", () => {
  const query = toCreateTableQuery({
    tableName: "users",
    schema: {
      id: uuid(),
      name: string({ default: "John Doe" }),
      email: string({ default: "john@gmail.com" }),
      age: uint8({ default: 18 }),
    },
    orderBy: ["id"],
    partitionBy: ["name", "age"],
  });
  assertStrictEquals(
    query,
    `CREATE TABLE IF NOT EXISTS users
(
  id UUID,
  name String DEFAULT 'John Doe',
  email String DEFAULT 'john@gmail.com',
  age UInt8 DEFAULT 18
)
ENGINE = MergeTree()
ORDER BY (id)
PARTITION BY (name, age);`,
  );
});

Deno.test("Query Generation | Cluster", () => {
  const query = toCreateTableQuery({
    tableName: "users",
    schema: {
      id: uuid(),
      name: string({ default: "John Doe" }),
      email: string(),
    },
    orderBy: ["id"],
    cluster: "users_cluster",
  });
  assertStrictEquals(
    query,
    `CREATE TABLE IF NOT EXISTS users ON CLUSTER users_cluster
(
  id UUID,
  name String DEFAULT 'John Doe',
  email String
)
ENGINE = MergeTree()
ORDER BY (id);`,
  );
});

Deno.test("Query Generation | Engine", () => {
  const query = toCreateTableQuery({
    tableName: "users",
    schema: {
      id: uuid(),
      name: string({ default: "John Doe" }),
      email: string(),
    },
    orderBy: ["id"],
    engine: "ReplacingMergeTree",
  });
  assertStrictEquals(
    query,
    `CREATE TABLE IF NOT EXISTS users
(
  id UUID,
  name String DEFAULT 'John Doe',
  email String
)
ENGINE = ReplacingMergeTree()
ORDER BY (id);`,
  );
});

Deno.test("Query Generation | Database", () => {
  const query = toCreateTableQuery({
    tableName: "users",
    schema: {
      id: uuid(),
      name: string({ default: "John Doe" }),
      email: string(),
    },
    orderBy: ["id"],
    database: "users_db",
  });
  assertStrictEquals(
    query,
    `CREATE TABLE IF NOT EXISTS users_db.users
(
  id UUID,
  name String DEFAULT 'John Doe',
  email String
)
ENGINE = MergeTree()
ORDER BY (id);`,
  );
});

Deno.test("Query Generation | Full", () => {
  const query = toCreateTableQuery({
    tableName: "users",
    schema: {
      name: lowCardinality({ itemType: string() }),
      date_of_birth: dateTime({ timezone: "UTC" }),
      friend_ids: array({ itemType: uint64(), default: [5, 25] }),
      meta: json({ maxDynamicPaths: 3 }),
    },
    orderBy: ["date_of_birth"],
    partitionBy: ["toYYYYMM(date_of_birth)"],
    engine: "Buffer",
    cluster: "user_cluster",
    database: "user_db",
  });
  assertStrictEquals(
    query,
    `CREATE TABLE IF NOT EXISTS user_db.users ON CLUSTER user_cluster
(
  name LowCardinality(String),
  date_of_birth DateTime('UTC'),
  friend_ids Array(UInt64) DEFAULT (5, 25),
  meta JSON(max_dynamic_paths=3)
)
ENGINE = Buffer()
ORDER BY (date_of_birth)
PARTITION BY (toYYYYMM(date_of_birth));`,
  );
});
