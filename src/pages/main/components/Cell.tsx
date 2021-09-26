import clsx from "clsx";
import React from "react";
import "./cell.scss";

type CellProps = {
  value: number;
  color?: string;
  isActive?: boolean;
  onClick?: () => any;
  style?: object;
  className?: string;
};

class Cell extends React.Component<CellProps> {
  defaultProps = {
    color: "black",
  };

  shouldComponentUpdate(nextProps: any) {
    if (JSON.stringify(nextProps) === JSON.stringify(this.props)) {
      return false;
    }
    return true;
  }

  render() {
    const { value, isActive, onClick, color, style, className } = this.props;
    console.log(value);

    return (
      <div
        style={{ ...style, color: color }}
        onClick={onClick && onClick()}
        className={clsx(className, "cell", { cell_active: isActive })}
      >
        {value || ""}
      </div>
    );
  }
}

export { Cell };
