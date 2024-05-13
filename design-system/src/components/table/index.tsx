/* eslint-disable react/no-array-index-key */
import React from "react";
import { cn } from "../../utils";
import { Checkbox, CheckboxProps } from "../checkbox";
import { Text } from "../text";
import { TableSkeleton } from "./Skeleton";

interface HeaderProps {
  className?: string;
  children: React.ReactNode;
}

interface CheckboxThProps extends CheckboxProps {
  className?: string;
  checkboxClassName?: string;
}

type TBodyProps = HeaderProps;
type CheckboxCellProps = CheckboxThProps;
type TableProps = HeaderProps;

const Header = ({ children, className }: HeaderProps) => (
  <thead>
    <tr className={cn(className)}>{children}</tr>
  </thead>
);

const Thead = ({ children, className }: HeaderProps) => (
  <th
    scope="col"
    className={cn("whitespace-nowrap py-2 pr-4 lg:pr-0", className)}
  >
    <Text type="body-bold" className="text-left text-secondary-4">
      {children}
    </Text>
  </th>
);

const CheckboxTh = (args: CheckboxThProps) => {
  const { className, checkboxClassName } = args;
  return (
    <th className={cn(className, "py-2 pr-4 lg:pr-0")}>
      <Checkbox {...args} className={checkboxClassName} />
    </th>
  );
};

export const Body = ({ children, className }: TBodyProps) => (
  <tbody className={cn(className, "divide-y divide-gray-300")}>
    {children}
  </tbody>
);

export const Row = ({ children, className }: TBodyProps) => (
  <tr className={cn(className)}>{children}</tr>
);

export const Cell = ({ children, className }: TBodyProps) => (
  <td className={cn(className, "py-2 pr-4 lg:pr-0")}>{children}</td>
);

export const CheckboxCell = (props: CheckboxCellProps) => {
  const { className, checkboxClassName } = props;
  return (
    <Cell className={className}>
      <Checkbox {...props} className={checkboxClassName} />
    </Cell>
  );
};

function Table({ children, className }: TableProps) {
  return (
    <div className={cn("overflow-auto", className)}>
      <table className="w-full divide-y divide-gray-300 border-y-gray-400 border border-x-0">
        {children}
      </table>
    </div>
  );
}

Table.Header = Header;
Table.Thead = Thead;
Table.CheckboxTH = CheckboxTh;
Table.Body = Body;
Table.Row = Row;
Table.Cell = Cell;
Table.CheckboxCell = CheckboxCell;

export { Table, TableSkeleton };
