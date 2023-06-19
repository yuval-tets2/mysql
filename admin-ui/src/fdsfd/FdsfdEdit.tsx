import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const FdsfdEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="first name" source="firstName" />
        <TextInput label="last name" source="lastName" />
        <TextInput label="takala" source="takala" />
      </SimpleForm>
    </Edit>
  );
};
