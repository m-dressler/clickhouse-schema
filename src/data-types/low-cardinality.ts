import { type DataType, DataTypes } from "../_mod.ts";

/** Represents all the data types that are allowed in a low cardinality column*/
export type LowCardinalityDataTypes =
  | DataTypes.String
  | DataTypes.FixedString
  | DataTypes.Date
  | DataTypes.DateTime
  | DataTypes.Float32
  | DataTypes.Float64
  | DataTypes.BFloat16
  | DataTypes.Int8
  | DataTypes.Int16
  | DataTypes.Int32
  | DataTypes.Int64
  | DataTypes.Int128
  | DataTypes.Int256
  | DataTypes.UInt8
  | DataTypes.UInt16
  | DataTypes.UInt32
  | DataTypes.UInt64
  | DataTypes.UInt128
  | DataTypes.UInt256;

/** @see https://clickhouse.com/docs/sql-reference/data-types/lowcardinality */
export type CHLowCardinality<
  ItemType extends DataType<LowCardinalityDataTypes, unknown>,
> = DataType<DataTypes.LowCardinality, ItemType["typeScriptType"], [ItemType]>;

/**
 * Creates a new `LowCardinality(T)` ClickHouse value of the provided type
 *
 * @see https://clickhouse.com/docs/sql-reference/data-types/lowcardinality
 */
export const lowCardinality = <
  ItemType extends DataType<LowCardinalityDataTypes, unknown>,
>(c: {
  itemType: ItemType;
  description?: string;
  default?: ItemType["typeScriptType"];
}): CHLowCardinality<ItemType> => ({
  type: DataTypes.LowCardinality,
  typeScriptType: c.itemType.typeScriptType,
  innerTypes: [c.itemType],
  description: c.description,
  default: c.default,
});
