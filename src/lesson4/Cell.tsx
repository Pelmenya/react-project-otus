import React, { FC } from "react";
import "./Cell.css";
import type { CellProps } from "./interfaces";

/**
 * Some custom description for Cell component
 */
export const Cell: FC<CellProps> = ({ filled, x, y, onClick }) => {
  if (filled) {
    return (
      <button
        className="cell cell_live"
        onClick={() => onClick(x || 0, y || 0)}
      >
        {filled}
      </button>
    );
  }
  return (
    <button className="cell cell_dead" onClick={() => onClick(x || 0, y || 0)}>
      {""}
    </button>
  );
};

export function getCell(props: CellProps) {
  // На самом деле это означает тоже самое что и
  // return <Cell x={props.x} y={props.y} onClick={props.onClick} />;
  // Все параметры передаются в компонент
  return <Cell {...props} />;
}
