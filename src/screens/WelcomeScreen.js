import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SocialIcon, Divider } from "react-native-elements";

function WelcomeScreen(props) {
  return (
    <View style={styles.container}>
      <SocialIcon button type="google" title="Sign in with Google" />
      <Divider style={{ margin: 25, backgroundColor: "blue" }} />
      <SocialIcon button type="facebook" title="Sign in with Facebook" />
      <SocialIcon button type="twitter" title="Sign in with Twitter" />
      <TouchableOpacity>
        <SocialIcon
          //   light
          //   raised={false}
          button
          type="linkedin"
          title="Sign in with LinkedIn"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
});

export default WelcomeScreen;
