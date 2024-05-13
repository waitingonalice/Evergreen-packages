import { Meta } from "@storybook/react";
import React from "react";
import { Table } from ".";

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
