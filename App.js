import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

import * as Animatable from 'react-native-animatable';
import Animated, { Easing } from 'react-native-reanimated';

import Example from './components/Example';
import TweenDemo from './components/TweenOne';

// SCREEN_DIMENSIONS has a {height} {width}
const SCREEN_DIMENSIONS = Dimensions.get('window');



export default function App() {
    handleViewRef = ref => this.view = ref;
  
  bounce = () => this.view.bounce(800).then(endState => console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'));
  
  return (
    <View style={styles.container}>
      <Text>Animatable</Text>
      <Animatable.Text animation="pulse" easing="linear" iterationCount={12} style={{ textAlign: 'center'}}>
        HELLO WORLD!
      </Animatable.Text>
        <Animatable.View animation="bounce" duration={800} iterationCount={12}>
          <Text>Bounce me!</Text>
        </Animatable.View>
        <Text>Reanimated</Text>
              <Example />
        <Text>TweenOne</Text>
              <TweenDemo />
        <Text>Pose</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
