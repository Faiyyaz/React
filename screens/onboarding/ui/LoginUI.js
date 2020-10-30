import React from "react";
import { ScrollView, StyleSheet, View, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import TextView from "../../../components/TextView";
import {
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";

//TextInput baseclass -> style/event
//Textinput function component

export default function LoginUI({ }) {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='white' barStyle='dark-content' />
            <ScrollView>
                <View style={{ marginTop: 32.0 }}>
                    <TextView
                        label="Email"
                        fontFamilyName="Poppins-SemiBold"
                        fontSizeValue="1.8"
                        color="#1E2126" >
                    </TextView>
                </View>
                <View style={{ marginVertical: 16.0 }}>
                    <TextInput
                        style={styles.textfield}
                        keyboardType="email-address"
                    />
                </View>
                <View style={{ marginTop: 8.0 }}>
                    <TextView
                        label="Password"
                        fontFamilyName="Poppins-SemiBold"
                        fontSizeValue="1.8"
                        color="#1E2126" >
                    </TextView>
                </View>
                <View style={{ marginVertical: 16.0 }}>
                    <TextInput
                        style={styles.textfield}
                        secureTextEntry={true}
                    />
                </View>
                <TextView
                    alignment="right"
                    label="Forget Password?"
                    fontFamilyName="Poppins-Regular"
                    fontSizeValue="1.8"
                    color="#828B9A" >
                </TextView>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 32.0,
    },
    textfield: {
        fontSize: responsiveScreenFontSize(1.8),
        color: "#828B9A",
        fontFamily: "Poppins-Regular",
        backgroundColor: '#F0F3F8',
        padding: 8.0,
    },
});