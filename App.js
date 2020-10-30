import React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Routing from "./utilities/Routing"

let customFonts = {
  'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
  'Poppins-ExtraLightItalic': require('./assets/fonts/Poppins-ExtraLightItalic.ttf'),
  'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
};

export default class App extends React.Component {
  state = {
    appIsReady: false,
  };

  async componentDidMount() {
    // Prevent native splash screen from autohiding
    try {
      await SplashScreen.preventAutoHideAsync();
    } catch (e) {
      console.warn(e);
    }
    this.prepareResources();
  }

  /**
   * Method that serves to load resources and make API calls
   */
  prepareResources = async () => {
    try {
      await downloadAssets();
    } catch (e) {
      console.warn(e);
    } finally {
      this.setState({ appIsReady: true }, async () => {
        await SplashScreen.hideAsync();
      });
    }
  };

  render() {
    if (!this.state.appIsReady) {
      return null;
    }

    return <Routing />;
  }
}

async function downloadAssets() {
  await Font.loadAsync(customFonts);
  await timeout(3000);
}

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}