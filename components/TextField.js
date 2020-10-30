import React from "react";
import {
    Text,
} from "react-native";
import {
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";


export default function TextField({
    label = "label",
    fontFamilyName = "Poppins-Medium",
    color = "#F0F3F8",
    fontSizeValue = "2.2",
    alignment = "left",
}) {
    return (
        <Text
            style={{
                fontSize: responsiveScreenFontSize(fontSizeValue),
                color: color,
                fontFamily: fontFamilyName,
                textAlign: alignment
            }}>
            {label}
        </Text>
    );
}