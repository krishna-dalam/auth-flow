import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, ListItem, Text } from "react-native-elements";
import AppContext from "../context/AppContext";

function HomeScreen() {
  const [loggedIn, setLoggedIn] = useContext(AppContext);
  return (
    <View style={styles.container}>
      <Avatar
        size="large"
        onPress={() => console.log("Works!")}
        rounded
        containerStyle={styles.image}
        source={require("../assets/krish.jpg")}
        showAccessory={true}
      />
      <Text h4 style={styles.profileName}>
        Krishna
      </Text>
      <ListItem
        key={1}
        title="Logout"
        leftIcon={{ name: "logout", type: "material-community" }}
        chevron
        onPress={() => setLoggedIn(!loggedIn)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    margin: 15,
    alignSelf: "center",
  },
  profileName: {
    alignSelf: "center",
    marginBottom: 25,
  },
  container: {
    paddingTop: 15,
    flex: 1,
  },
});

export default HomeScreen;
