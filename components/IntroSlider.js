
import TextView from "../components/TextView";
import { StyleSheet, Image, View } from 'react-native';
import React from "react";

export default function IntroSlider({
    title,
    subtitle,
    url
}) {
    return <View>
        <View style={{ height: 16 }} />
        <Image source={url} />
        <View style={{ height: 48 }} />
        <View style={{ marginHorizontal: 40 }}>
            <TextView
                label={title}
                fontFamilyName="Poppins-SemiBold"
                fontSizeValue="2.8"
                alignment="center"
                color="#1E2126" >
            </TextView>
        </View>
        <View style={{ height: 16 }} />
        <View style={{ marginHorizontal: 20 }}>
            <TextView
                label={subtitle}
                fontFamilyName="Poppins-Regular"
                fontSizeValue="2.4"
                alignment="center"
                color="#828B9A" >
            </TextView>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 42,
    },
});