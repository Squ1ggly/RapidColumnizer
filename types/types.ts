export interface ISqlColumnObject {
  column_name: string;
  data_type: string;
}

export interface IRapidColumnObjectSettings {
  Choices: any[];
  LookupBindings: any[];
}
export interface IRapidColumnObject {
  FieldType: string;
  Title: string;
  ColumnName: string;
  SystemManaged: boolean;
  Searchable: boolean;
  Settings: IRapidColumnObjectSettings;
  TitleField: boolean;
}
