import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const FdsfdCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="first name" source="firstName" />
        <TextInput label="last name" source="lastName" />
        <TextInput label="takala" source="takala" />
      </SimpleForm>
    </Create>
  );
};
