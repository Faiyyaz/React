import React from "react";
import TextView from "../../components/TextView";
import AppIntroSlider from "react-native-app-intro-slider";
import IntroSlider from "../../components/IntroSlider";
import { StyleSheet, View } from "react-native";

const slides = [
    {
        key: "1",
        title: "Biggest Sell at Your Fingerprint",
        text: "Find your best products from popular shop without any delay",
        image: require("../../assets/images/onboarding1.png"),
    },
    {
        key: "2",
        title: "Pay Secure Payment Gateway",
        text: "Find your best products from popular shop without any delay",
        image: require("../../assets/images/onboarding2.png"),
    },
    {
        key: "3",
        title: "Get Faster and Safe Delivery",
        text: "Find your best products from popular shop without any delay",
        image: require("../../assets/images/onboarding3.png"),
    }
];

export default class WelcomeScreen extends React.Component {
    _renderItem = ({ item }) => {
        return (
            <IntroSlider
                url={item.image}
                title={item.title}
                subtitle={item.text} >
            </IntroSlider>
        );
    }
    _onDone = () => {
        this.props.navigation.reset({
            index: 0,
            routes: [{ name: 'LoginScreen' }],
        });
    }
    render() {
        return <AppIntroSlider
            renderItem={this._renderItem}
            data={slides} onDone={this._onDone}
            showSkipButton="true"
            renderSkipButton={this._renderSkipButton}
            renderNextButton={this._renderNextButton}
            renderDoneButton={this._renderDoneButton}
            activeDotStyle={{ backgroundColor: "rgb(54,79,212)" }}
            dotStyle={{ backgroundColor: "rgb(185,193,204)" }}
        />
    }

    _renderSkipButton = () => {
        return (
            <View style={styles.textStyle}>
                <TextView label="Skip" fontFamilyName="Poppins-SemiBold" fontSizeValue="2.2" color="#B9C1CC" />
            </View>
        );
    };

    _renderNextButton = () => {
        return (
            <View style={styles.doneStyle}>
                <TextView label="Next" fontFamilyName="Poppins-SemiBold" fontSizeValue="2.2" color="#B9C1CC" />
            </View>
        );
    };

    _renderDoneButton = () => {
        return (
            <View style={styles.doneStyle}>
                <TextView label="Done" fontFamilyName="Poppins-SemiBold" fontSizeValue="2.2" color="#B9C1CC" />
            </View>
        );
    };
}

const styles = StyleSheet.create({
    textStyle: {
        height: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    doneStyle: {
        height: 40,
        width: 100,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#364FD4"
    },
});