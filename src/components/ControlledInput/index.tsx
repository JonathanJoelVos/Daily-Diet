import { Input, InputProps} from "@components/Input";
import React from "react";
import { Controller, Control, FieldError} from "react-hook-form";

interface ControlledInputProps extends InputProps {
    control: Control<any>;
    name: string;
    error?: FieldError;
}
export function ControlledInput({ control, name, error, ...rest }: ControlledInputProps) {

  return (
    <>
      <Controller
          control={control}
          name={name}
          render={({field: {onChange, value}}) => (
              <Input
                  {...rest}
                  onChangeText={onChange}
                  value={value}
                  error={error}
              />
          )}
      />
    </>
  )
}


