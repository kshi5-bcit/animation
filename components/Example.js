import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Audio } from 'expo-av';

import Animated, { Easing } from 'react-native-reanimated';

const { Value, timing } = Animated;
  const soundObject = new Audio.Sound();
async function loadAudio() {
    try {
        await soundObject.loadAsync(require('../audio/tetris.mp3'));


    } catch (error) {
    }
}
async function playAudio() {
          await soundObject.replayAsync();
}
async function stopAudio() {
    try {
        await soundObject.stopAsync();
    } catch (error) {
    }
}
export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this._transX = new Value(0);
    this._config = {
      duration: 5000,
      toValue: 180,
      easing: Easing.inOut(Easing.ease),
    };
    this._newconfig = {
      duration: 5000,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
    };
    this._anim = timing(this._transX, this._config);
    this._newanim = timing(this._transX, this._newconfig);
    console.log("got here ");

  loadAudio();
  } 


  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, { transform: [{ translateX: this._transX }] }]} />
        <Button
            onPress={() => {
              playAudio();
            this._anim.start();
    console.log("start timeout ");
            setTimeout(this._newanim.start,5000);
    console.log("end  timeout ");

            this._newanim.start();
    console.log("end newanim ");
            
          }}
          title="Start"
        />        
        <Button
            onPress={stopAudio}
          title="STOP"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'purple',
    borderRadius: 5,
  },
});