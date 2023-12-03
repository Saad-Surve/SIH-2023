import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";

const rows = [
  {
    key: "1",
    headline: "News 1",
    type: "Article",
    Date: "2023-11-10",
  },
  {
    key: "2",
    headline: "News 2",
    type: "Video",
    Date: "2023-11-19",
  },
  {
    key: "3",
    headline: "News 3",
    type: "Article",
    Date: "2023-11-20",
  },
  {
    key: "4",
    headline: "News 4",
    type: "Article",
    Date: "2023-11-18",
  },
];

const columns = [
  {
    key: "headline",
    label: "Headline",
  },
  {
    key: "type",
    label: "Type",
  },
  {
    key: "Date",
    label: "Date",
  },
];

export default function CustTable() {
  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
