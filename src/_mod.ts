import { array, type CHArray } from "./data-types/array.ts";
import { boolean, type CHBoolean } from "./data-types/boolean.ts";
import { type CHDateTime, dateTime } from "./data-types/dates/date-time.ts";
import {
  type CHDateTime64,
  dateTime64,
} from "./data-types/dates/date-time64.ts";
import { type CHDate, date } from "./data-types/dates/date.ts";
import { type CHDate32, date32 } from "./data-types/dates/date32.ts";
import { type CHDecimal, decimal } from "./data-types/decimals/decimal.ts";
import {
  type CHDecimal128,
  decimal128,
} from "./data-types/decimals/decimal128.ts";
import {
  type CHDecimal256,
  decimal256,
} from "./data-types/decimals/decimal256.ts";
import {
  type CHDecimal32,
  decimal32,
} from "./data-types/decimals/decimal32.ts";
import {
  type CHDecimal64,
  decimal64,
} from "./data-types/decimals/decimal64.ts";
import { type CHDynamic, dynamic } from "./data-types/dynamic.ts";
import type { CHEnum } from "./data-types/enum.ts";
import { type CHFixedString, fixedString } from "./data-types/fixed-string.ts";
import { bfloat16, type CHBFloat16 } from "./data-types/float/bfloat16.ts";
import { type CHFloat32, float32 } from "./data-types/float/float32.ts";
import { type CHFloat64, float64 } from "./data-types/float/float64.ts";
import { type CHInt128, int128 } from "./data-types/integers/int128.ts";
import { type CHInt16, int16 } from "./data-types/integers/int16.ts";
import { type CHInt256, int256 } from "./data-types/integers/int256.ts";
import { type CHInt32, int32 } from "./data-types/integers/int32.ts";
import { type CHInt64, int64 } from "./data-types/integers/int64.ts";
import { type CHInt8, int8 } from "./data-types/integers/int8.ts";
import { type CHUInt128, uint128 } from "./data-types/integers/uint128.ts";
import { type CHUInt16, uint16 } from "./data-types/integers/uint16.ts";
import { type CHUInt256, uint256 } from "./data-types/integers/uint256.ts";
import { type CHUInt32, uint32 } from "./data-types/integers/uint32.ts";
import { type CHUInt64, uint64 } from "./data-types/integers/uint64.ts";
import { type CHUInt8, uint8 } from "./data-types/integers/uint8.ts";
import { type CHIPv4, ipv4 } from "./data-types/ipv4.ts";
import { type CHIPv6, ipv6 } from "./data-types/ipv6.ts";
import { type CHJson, json } from "./data-types/json.ts";
import {
  type CHLowCardinality,
  lowCardinality,
  type LowCardinalityDataTypes,
} from "./data-types/low-cardinality.ts";
import { type CHNullable, nullable } from "./data-types/nullable.ts";
import { type CHPoint, point } from "./data-types/point.ts";
import { type CHString, string } from "./data-types/string.ts";
import { type CHTuple, tuple } from "./data-types/tuple.ts";
import { type CHUUID, uuid } from "./data-types/uuid.ts";
import { type CHVariant, variant } from "./data-types/variant.ts";
import type { Literal } from "./stringify-data-type.ts";

// Exports
export { toCreateTableQuery } from "./create-table-statement.ts";
export { enum } from "./data-types/enum.ts";
export type { infer } from "./infer-schema-type.ts";
export {
  array,
  bfloat16,
  boolean,
  type CHArray,
  type CHBFloat16,
  type CHBoolean,
  type CHDate,
  type CHDate32,
  type CHDateTime,
  type CHDateTime64,
  type CHDecimal,
  type CHDecimal128,
  type CHDecimal256,
  type CHDecimal32,
  type CHDecimal64,
  type CHDynamic,
  type CHEnum,
  type CHFixedString,
  type CHFloat32,
  type CHFloat64,
  type CHInt128,
  type CHInt16,
  type CHInt256,
  type CHInt32,
  type CHInt64,
  type CHInt8,
  type CHIPv4,
  type CHIPv6,
  type CHJson,
  type CHLowCardinality,
  type CHNullable,
  type CHPoint,
  type CHString,
  type CHTuple,
  type CHUInt128,
  type CHUInt16,
  type CHUInt256,
  type CHUInt32,
  type CHUInt64,
  type CHUInt8,
  type CHUUID,
  type CHVariant,
  date,
  date32,
  dateTime,
  dateTime64,
  decimal,
  decimal128,
  decimal256,
  decimal32,
  decimal64,
  dynamic,
  fixedString,
  float32,
  float64,
  int128,
  int16,
  int256,
  int32,
  int64,
  int8,
  ipv4,
  ipv6,
  json,
  lowCardinality,
  nullable,
  point,
  string,
  tuple,
  uint128,
  uint16,
  uint256,
  uint32,
  uint64,
  uint8,
  uuid,
  variant,
};
export type { LowCardinalityDataTypes };

/** An enum that encodes all ClickHouse data types */
export enum DataTypes {
  UInt8,
  UInt16,
  UInt32,
  UInt64,
  UInt128,
  UInt256,
  Int8,
  Int16,
  Int32,
  Int64,
  Int128,
  Int256,
  Float32,
  Float64,
  BFloat16,
  Decimal,
  Decimal32,
  Decimal64,
  Decimal128,
  Decimal256,
  Boolean,
  Date,
  Date32,
  DateTime,
  DateTime64,
  UUID,
  FixedString,
  String,
  IPv4,
  IPv6,
  Array,
  Enum,
  Tuple,
  Variant,
  Dynamic,
  Nullable,
  JSON,
  LowCardinality,
  Point,
}

/** DataType is an interface that represents a ClickHouse data type */
export type DataType<
  Type extends DataTypes,
  TsType,
  InnerTypes extends AnyDataType[] | undefined = undefined,
> = {
  /** The ClickHouse data type this instance represents */
  type: Type;
  /** An optional description for what the value represents */
  description?: string;
  /** An optional default value for the column */
  default?: unknown;
  /** An optional list of inner type for nested types */
  innerTypes?: InnerTypes;
  /** The TypeScript representation of the type  */
  typeScriptType: TsType;
  /** Arguments to be stringified, e.g. `{ type: DateTime64, arguments: [ 3, "UTC"] }` -> `'DateTime64(3, "UTC")'` */
  arguments?: (string | number | Literal | Record<string, number>)[];
};

/** Any possible {@link DataType} */
export type AnyDataType = DataType<
  DataTypes,
  unknown,
  AnyDataType[] | undefined
>;

/** A database schema that can be converted into a CREATE TABLE statement via `toCreateTableQuery`}` */
export type Schema = Record<string, AnyDataType>;

/** All official engines supported (however, custom ones can be provided!) */
export type Engines =
  | "MergeTree"
  | "ReplacingMergeTree"
  | "SummingMergeTree"
  | "AggregatingMergeTree"
  | "CollapsingMergeTree"
  | "VersionedCollapsingMergeTree"
  | "GraphiteMergeTree"
  | "CoalescingMergeTree"
  | "TinyLog"
  | "StripeLog"
  | "Log"
  | "ODBC"
  | "JDBC"
  | "MySQL"
  | "MongoDB"
  | "Redis"
  | "HDFS"
  | "S3"
  | "Kafka"
  | "EmbeddedRocksDB"
  | "RabbitMQ"
  | "PostgreSQL"
  | "S3Queue"
  | "TimeSeries"
  | "Distributed"
  | "Dictionary"
  | "Merge"
  | "Executable"
  | "File"
  | "Null"
  | "Set"
  | "Join"
  | "URL"
  | "View"
  | "Memory"
  | "Buffer"
  | "External Data"
  | "GenerateRandom"
  | "KeeperMap"
  | "FileLog";
