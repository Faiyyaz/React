import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/onboarding/LoginScreen"
import WelcomeScreen from "../screens/onboarding/WelcomeScreen";
import {
  responsiveScreenFontSize
} from "react-native-responsive-dimensions";
import { StyleSheet } from "react-native";

const Stack = createStackNavigator();

export default function Routing({}) {
  return (
    <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="WelcomeScreen"
              component={WelcomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{ 
                title: "Sign in",
                headerTintColor: "#fff",
                headerTitleStyle: styles.textStyle,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color : "#1E2126",
    fontFamily : "Poppins-Medium",
    fontSize: responsiveScreenFontSize(2.4),
    alignSelf: 'center'
  },
});