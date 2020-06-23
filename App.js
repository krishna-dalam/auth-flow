import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";
import { Provider } from "./src/context/AppContext";
import GoogleAuthentication from "./src/auth/GoogleAuthentication";
import FacebookAuthentication from "./src/auth/FacebookAuthentication";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return <FacebookAuthentication />;
}

// Basic login
{
  /* <Provider value={[loggedIn, setLoggedIn]}>
{loggedIn ? <HomeScreen /> : <LoginScreen />}
</Provider> */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
