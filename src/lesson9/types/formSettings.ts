export interface PlayerSettings {
  name: string;
  symbol: string;
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

export interface GameSettingsFormResult {
  player: PlayerSettings;
}

export interface GameSettingsFormProps {
  onSubmit: (settings: GameSettingsFormResult) => void;
}
