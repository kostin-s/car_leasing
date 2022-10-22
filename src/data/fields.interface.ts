export interface IInputData {
  minValue: number;
  maxValue: number;
  step: number;
  defaultValue: number;
}

export interface IInfoData {
  title: string;
  defaultValue: number;
  format: string;
  calcFormat?: string;
}

export interface IFieldsData extends IInfoData {
  minValue: number;
  maxValue: number;
  step: number;
}
