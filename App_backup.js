import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';
import Animated, { Easing } from 'react-native-reanimated';

import Example from './components/Example';
// import TweenDemo from './components/TweenDemo';
// import TweenBasicDemo from './components/TweenBasicDemo';
// import Box from './components/PoseBoxExample';
// import PoseExample from './components/PoseExample';
import PoseBoxExample from './components/PoseBoxExample';
import MakeItRain from './components/MakeItRain';
import PoseItem from './components/PoseItem';

// SCREEN_DIMENSIONS has a {height} {width}
// const SCREEN_DIMENSIONS = Dimensions.get('window');



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
          <TouchableWithoutFeedback  onPress={() => {console.log("pressed Exit")}} >
          <Text>Exit text</Text>
        </TouchableWithoutFeedback>
        <PoseItem />
        <Animatable.View style={styles.container} animation="bounce">
        <MakeItRain />
        <Text>Pose box</Text>
        </Animatable.View>        
        <Animatable.View style={styles.container} animation="bounce" duration={200} delay={200} iterationCount='infinite'>
        <PoseBoxExample />
        </Animatable.View>

        <Text>Reanimated</Text>
              <Example style={{height:'400px'}}/>
        <Text>TweenOne</Text>



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
