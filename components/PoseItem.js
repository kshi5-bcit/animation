import React, {Component} from "react";
import posed from "react-native-pose";

import PropTypes from 'prop-types'
import { StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

const Item = posed.View({
  on: { opacity: 1, y: 0, transition: { duration: 700 } },
  off: { opacity: 0, y: 30, transition: { type: "spring" } }
});

// const ItemContainer = props => {
//   return <Item {...props} className="item" />;
// };

// export default ItemContainer;
export default class PoseItem extends Component<Props> {
	  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open,
    };
  }
render() {
	return (
		<View style={styles.items} pose={this.state.open ? "on" : "off"}>
<Text>This is the Pose Item</Text>
		
		</View>		
		);
}
}

const styles = StyleSheet.create({
  item: {
  backgroundColor: '#f06659',
  opacity: 0.25,
  },
});
