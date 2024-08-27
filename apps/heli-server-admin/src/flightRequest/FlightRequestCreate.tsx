import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  SelectInput,
  TextInput,
} from "react-admin";

export const FlightRequestCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <DateTimeInput label="time" source="time" />
        <SelectInput
          source="windTurbineStatus"
          label="wind turbine status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="WTG code" source="wtgCode" />
      </SimpleForm>
    </Create>
  );
};
