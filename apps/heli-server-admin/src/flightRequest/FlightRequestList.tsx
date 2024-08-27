import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const FlightRequestList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"FlightRequests"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="date" source="date" />
        <TextField label="ID" source="id" />
        <TextField label="time" source="time" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="wind turbine status" source="windTurbineStatus" />
        <TextField label="WTG code" source="wtgCode" />
      </Datagrid>
    </List>
  );
};
