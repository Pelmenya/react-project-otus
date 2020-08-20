export interface CellProps {
  // is cell filled flag
  filled?: string;
  // onClick handler to fire events about interactions
  onClick: (x: number, y: number) => void;
  // x-coordinate to inform which cell is clicked
  x?: number;
  // y-coordinate to inform which cell is clicked
  y?: number;
}

export interface FieldProps {
  // array representing field state
  field: string[][];
  // calback to fire event on field interaction
  onClick: (x: number, y: number) => void;
}

export interface FieldAxisSizeProps {
  type: string;
  size: number;
  name: string;
  onChange: (name: string) => void;
}

export interface FieldSizeProps {
  inputs: Array<{
    type: string;
    size: number;
    name: string;
  }>;
  onChange: (name: string) => void;
}
