import { underscored } from "underscore.string";
import sqlColumns from "./columns.json";
import fs from "fs";
import { IRapidColumnObject, ISqlColumnObject } from "./types/types";
const rapidColumns: IRapidColumnObject[] = [];

function convertSQLDatatypeToRapidType(sqlDataType: string) {
  switch (sqlDataType) {
    case "text":
      return "Note";
    case "datetime":
    case "smalldatetime":
    case "date":
      return "DateTime";
    case "varchar":
    case "uniqueidentifier":
    case "char":
    case "nvarchar":
    case "nchar":
      return "Text";
    case "bit":
      return "Boolean";
    case "float":
    case "numeric":
    case "decimal":
      return "Number";
    case "smallint":
    case "int":
    case "bigint":
    case "tinyint":
      return "Integer";
    case "money":
      return "Currency";
    default: 
      return "Text";
  }
}

for (const column of sqlColumns as ISqlColumnObject[]) {
  rapidColumns.push({
    FieldType: convertSQLDatatypeToRapidType(column.data_type),
    Title: column.column_name,
    ColumnName: underscored(column.column_name),
    SystemManaged: false,
    Searchable: true,
    Settings: { Choices: [], LookupBindings: [] },
    TitleField: false,
  });
}

fs.writeFileSync("./output.json", JSON.stringify(rapidColumns, null, 2));
