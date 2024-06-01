import { Meta } from "@storybook/react";
import React from "react";
import { EmptyTable, Table, TableSkeleton } from ".";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
};
export default meta;

export const Component = () => (
  <Table>
    <Table.Header>
      <Table.Thead>Header 1</Table.Thead>
      <Table.Thead>Header 2</Table.Thead>
      <Table.Thead>Header 3</Table.Thead>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Cell 1</Table.Cell>
        <Table.Cell>Cell 2</Table.Cell>
        <Table.Cell>Cell 3</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell 4</Table.Cell>
        <Table.Cell>Cell 5</Table.Cell>
        <Table.Cell>Cell 6</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export const LoadingState = () => (
  <TableSkeleton
    rows={3}
    columns={[{ name: "Column 1" }, { name: "Column 2" }, { name: "Column 3" }]}
    withCheckbox
  />
);

export const EmptyTableState = () => {
  const columns = [
    { name: "Column 1" },
    { name: "Column 2" },
    { name: "Column 3" },
  ];
  return <EmptyTable columns={columns} content="No records available" />;
};
