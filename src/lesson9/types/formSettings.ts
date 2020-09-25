export interface PlayerSettingsFormResult {
  name: string;
  playerMarks: string;
  colorLiveCell: string;
  colorDeadCell: string;
  xSize: number;
  ySize: number;
  fillPercentage: number;
  speed: number;
  speedPause: boolean;
  stop: boolean;
  reset: boolean;
  idImage: number;
}

export interface GameSettingsFormProps {
  onSubmit: (settings: PlayerSettingsFormResult) => void;
}
