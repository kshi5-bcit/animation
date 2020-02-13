// MAKE IT RAIN SIDEWAYS
import React from 'react';
import { View, Dimensions, ImageBackground } from 'react-native';
import * as Animatable from 'react-native-animatable';
// import erlich from '../assets/erlich.png';
import moneyFront from '../assets/money-front.jpeg';
import moneyBack from '../assets/money-back.jpeg';

const MONEY_DIMENSIONS = { width: 49, height: 26 };
const SCREEN_DIMENSIONS = Dimensions.get('window');
const WIGGLE_ROOM = 50;

const FlippingImage = ({
  back = Math.random() >= 0.5,
  delay,
  duration = 1000,
  source,
  style = {},
}) => (
  <Animatable.Image
    animation={{
      from: {
        rotateX: back ? '0deg' : '180deg',
      },
      to: {
        rotateX: back ? '360deg' : '-180deg',
      },
    }}
    duration={duration+1000*Math.random()}
    delay={delay+1000*Math.random()}
    easing="linear"
    iterationCount="infinite"
    useNativeDriver
    source={source}
    style={{
      ...style,
      backfaceVisibility: 'hidden',
    }}
  />
);

const Swinging = ({
  amplitude,
  rotation = 7,
  delay,
  duration = 700,
  children,
}) => (
  <Animatable.View
    animation={{
      0: {
        translateY: -amplitude,
        translateX: -amplitude * 0.8,
        rotate: `${rotation}deg`,
      },
      0.5: {
        translateY: 0,
        translateX: 0,
        rotate: '0deg',
      },
      1: {
        translateY: amplitude,
        translateX: -amplitude * 0.8,
        rotate: `${-rotation}deg`,
      },
    }}
    delay={delay+Math.random()*1000}
    duration={duration+Math.random()*1000}
    direction="alternate"
    easing="ease-in-out"
    iterationCount="infinite"
    useNativeDriver>
    {children}
  </Animatable.View>
);

const Falling = ({ duration, delay, style, children }) => (
  <Animatable.View
    animation={{
      from: { translateX: -SCREEN_DIMENSIONS.width },
      to: { translateX: SCREEN_DIMENSIONS.width + WIGGLE_ROOM },
    }}
    duration={duration}
    delay={delay}
    easing={t => Math.pow(t, 1.7)}
    iterationCount="infinite"
    useNativeDriver
    style={style}>
    {children}
  </Animatable.View>
);


const randomize = max => Math.random() * max;

const range = count => {
  const array = [];
  for (let i = 0; i < count; i++) {
    array.push(i);
  }
  return array;
};

const MakeItRain = ({ count = 15, duration = 5000 }) => (
  <View style={{ flex: 1 }}>
    {range(count)
      .map(i => randomize(1000))
      .map((flipDelay, i) => (
        <Falling
          key={i}
          duration={duration+10*Math.random()}
          delay={i * (duration / count)*2}
          style={{
            position: 'absolute',
            paddingVertical: WIGGLE_ROOM,
            bottom:
              randomize(SCREEN_DIMENSIONS.height - MONEY_DIMENSIONS.width) -
              WIGGLE_ROOM,
            left:
              0
          }}>
          <Swinging
            amplitude={MONEY_DIMENSIONS.width / 5}
            delay={randomize(duration)}>
            <FlippingImage source={moneyFront} delay={flipDelay} />
            <FlippingImage
              source={moneyBack}
              delay={flipDelay}
              back
              style={{ position: 'absolute', }}
            />
          </Swinging>
        </Falling>
      ))}
  </View>
);

export default MakeItRain;