import React, { useContext, useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { SocialIcon, Divider } from "react-native-elements";
import * as Yup from "yup";

import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";
import AppContext from "../context/AppContext";
import ErrorMessage from "../components/forms/ErrorMessage";

const validLogins = [
  {
    email: "krishna@domain.com",
    password: "12345",
  },
  {
    email: "admin@domain.com",
    password: "54321",
  },
];

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen() {
  const [loggedIn, setLoggedIn] = useContext(AppContext);
  const [error, setError] = useState("");
  const handleSubmit = (values) => {
    validLogins.forEach((login) =>
      login.email == values.email && login.password == values.password
        ? setLoggedIn(!loggedIn)
        : setError("Invalid username/password")
    );
  };
  return (
    <View style={styles.container}>
      <ErrorMessage
        visible={error}
        error={error}
        style={{ alignSelf: "center" }}
      />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          name="email"
          placeholder="Email"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
        />
        <SubmitButton title="Login" />
      </AppForm>

      <Divider style={styles.divider} />
      <SocialIcon
        button
        Component={TouchableOpacity}
        type="google"
        onPress={() => console.log("Google")}
        title="Sign in with Google"
      />
      <SocialIcon
        button
        Component={TouchableOpacity}
        type="facebook"
        onPress={() => console.log("Facebook")}
        title="Sign in with Facebook"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 15,
  },
  divider: {
    margin: 25,
    backgroundColor: "#000",
  },
});

export default LoginScreen;
