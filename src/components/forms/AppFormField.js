import React from "react";
import { useFormikContext } from "formik";
import { Input, colors } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppFormField({ name, icon, width, ...otherObjects }) {
  const { setFieldTouched, setFieldValue, errors, values } = useFormikContext();
  return (
    <>
      <Input
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        width={width}
        errorMessage={errors[name]}
        leftIcon={
          <MaterialCommunityIcons name={icon} size={24} color={colors.grey2} />
        }
        {...otherObjects}
      />
    </>
  );
}

export default AppFormField;
