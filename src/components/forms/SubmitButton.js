import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useFormikContext } from "formik";
import { Button } from "react-native-elements";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return (
    <Button title={title} buttonStyle={styles.button} onPress={handleSubmit} />
  );
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 25,
  },
});

export default SubmitButton;
