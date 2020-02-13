import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

import * as Animatable from 'react-native-animatable';
import Animated, { Easing } from 'react-native-reanimated';

import Example from './components/Example';
// import TweenDemo from './components/TweenDemo';
// import TweenBasicDemo from './components/TweenBasicDemo';
// import Box from './components/PoseBoxExample';
// import PoseExample from './components/PoseExample';
// import PoseBoxExample from './components/PoseBoxExample';
import MakeItRain from './components/MakeItRain';
// import PoseItem from './components/PoseItem';
import RedGrid from './components/RedGrid';

// SCREEN_DIMENSIONS has a {height} {width}
// const SCREEN_DIMENSIONS = Dimensions.get('window');


  const soundObject = new Audio.Sound();
async function loadAudio() {
    try {
        await soundObject.loadAsync(require('./audio/tetris.mp3'));

          await soundObject.replayAsync();

    } catch (error) {
    }
}
export default function App() {


    handleViewRef = ref => this.view = ref;
  
  bounce = () => this.view.bounce(800).then(endState => console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'));
  loadAudio();
  return (
    <View style={styles.container}>
        <RedGrid>
        </RedGrid>
        <MakeItRain>
         </MakeItRain> 
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
