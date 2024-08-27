import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const FlightRequestShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="date" source="date" />
        <TextField label="ID" source="id" />
        <TextField label="time" source="time" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="wind turbine status" source="windTurbineStatus" />
        <TextField label="WTG code" source="wtgCode" />
      </SimpleShowLayout>
    </Show>
  );
};
