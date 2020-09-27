export type InputType = "number" | "select" | "text" | "color";
export type InputTypeValue = string | number | boolean;
export type InputTypeLayout = "row" | "column";

export interface PlayerField {
  name: string;
  type: InputType;
  value: InputTypeValue;
  layout: InputTypeLayout;
  label: string;
  min?: number;
  max?: number;
  requered?: boolean;
  options?: Array<string>;
}

export type PlayerSettingsFormInitial = Array<PlayerField>;

export interface PlayerSettingsFormResult {
  [key: string]: InputTypeValue;
  name: string;
  playerMarks: string;
  colorLiveCell: string;
  colorDeadCell: string;
  xSize: number;
  ySize: number;
  fillPercentage: number;
  speed: number;
  idImage: number;
}

export interface GameSettingsFormProps {
  initialFormSettings: PlayerSettingsFormInitial;
  onSubmit: (settings: PlayerSettingsFormResult) => void;
}
