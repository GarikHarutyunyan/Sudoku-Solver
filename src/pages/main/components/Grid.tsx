import clsx from "clsx";
import React from "react";
import { Cell } from "./Cell";
import "./grid.scss";

type GridProps = {
  matrix: any[][];
  activeCell?: any;
  onCellClick?: any;
  cellsStyle?: object;
  cellsClassName?: string;
};

class Grid extends React.Component<GridProps> {
  onCellClick = (y: number, x: number) => {
    const { matrix, onCellClick } = this.props;

    if (!!matrix[y][x].onClick) {
      matrix[y][x].onClick();
    } else if (!!onCellClick) {
      onCellClick(y, x);
    }
  };

  render() {
    const { matrix, activeCell, cellsStyle, cellsClassName } = this.props;

    return (
      <div className={"grid"}>
        {matrix.map((row, y) => {
          return (
            <div className={"grid__row"}>
              {row.map((cell, x) => {
                return (
                  <Cell
                    value={cell.value}
                    color={cell.color}
                    isActive={x === activeCell?.x && y === activeCell?.y}
                    onClick={() => () => this.onCellClick(y, x)}
                    style={cellsStyle}
                    className={clsx(cellsClassName, {
                      "cell_bold-top-border": y === 3 || y === 6,
                      "cell_bold-left-border": x === 3 || x === 6,
                    })}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export { Grid };
