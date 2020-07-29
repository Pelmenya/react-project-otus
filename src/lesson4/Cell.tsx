import React, { FC } from "react";
import "./Cell.css";
import type { CellProps } from "./interfaces";

/**
 * Some custom description for Cell component
 */
const Cell: FC<CellProps> = ({ filled, x, y, onClick }) => {
  if (filled) {
    return <button className="cell cell_live">{filled}</button>;
  }
  return (
    <button className="cell cell_dead" onClick={() => onClick(x || 0, y || 0)}>
      {filled}
    </button>
  );
};

export default Cell;

export function getCell(props: CellProps) {
  // На самом деле это означает тоже самое что и
  // return <Cell x={props.x} y={props.y} onClick={props.onClick} />;
  // Все параметры передаются в компонент
  return <Cell {...props} />;
}
