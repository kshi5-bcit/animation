import React, {Component} from 'react'
import PropTypes from 'prop-types'

// Import the posed compoent from react-pose
import posed from 'react-native-pose'
import { View, TouchableOpacity, Text } from 'react-native'

import { StyleSheet } from 'react-native'

const Box = posed.View({
  visible: {x:200, opacity: 1, y:20, rotate:20,delayChildren: 1000, staggerChildren: 500, staggerDirection:-1 },
  hidden: { opacity: 1, x:0, y:0, rotate:-20, delay:300}
});
const ChildBox = posed.View({
  visible: {x:200, y:-200, rotate:20,transition: { duration: 5000 }
  },
  hidden: { x:50, y:-200, rotate:-20, delay:300}
});


export default class PoseBoxExample extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false
    };
  }

  render() {
    const { isVisible } = this.state;
    return (
      <View>
          <Box
    style={{ width: 100, height: 100, backgroundColor: "red" }}
    pose={isVisible ? "visible" : "hidden"}
  >
            <ChildBox
    style={{ width: 50, height: 50, backgroundColor: "blue" }}
    pose={isVisible ? "visible" : "hidden"}
  /><ChildBox
    style={{ width: 50, height: 50, backgroundColor: "green" }}
    pose={isVisible ? "visible" : "hidden"}
  /><ChildBox
    style={{ width: 50, height: 50, backgroundColor: "yellow" }}
    pose={isVisible ? "visible" : "hidden"}
  />
            <ChildBox
    style={{ width: 50, height: 50, backgroundColor: "blue" }}
    pose={isVisible ? "visible" : "hidden"}
  /><ChildBox
    style={{ width: 50, height: 50, backgroundColor: "green" }}
    pose={isVisible ? "visible" : "hidden"}
  /><ChildBox
    style={{ width: 50, height: 50, backgroundColor: "yellow" }}
    pose={isVisible ? "visible" : "hidden"}
  />
            <ChildBox
    style={{ width: 50, height: 50, backgroundColor: "blue" }}
    pose={isVisible ? "visible" : "hidden"}
  /><ChildBox
    style={{ width: 50, height: 50, backgroundColor: "green" }}
    pose={isVisible ? "visible" : "hidden"}
  /><ChildBox
    style={{ width: 50, height: 50, backgroundColor: "yellow" }}
    pose={isVisible ? "visible" : "hidden"}
  />
  </Box>
        <TouchableOpacity
        style={styles.button}
          onPress={() => {
            this.setState({
              isVisible: !this.state.isVisible
            });
          }}
        >
          <Text>Show Box</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  }
})