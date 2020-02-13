import React from "react";
import { StyleSheet, StatusBar, View, Dimensions } from "react-native";
import posed from "react-native-pose";
import { ScreenOrientation } from 'expo';


// import MakeItRain from './components/MakeItRain';

const { width, height } = Dimensions.get("screen");

const GridItem = posed.View({
  RIGHT: {transition: { type: 'spring',stiffness: 500 }
    , rotate: "60deg", scale:1.25 },
  LEFT: { transition: { type: 'spring',stiffness: 300 }
   , rotate: "-60deg", scale:1.25 },
  UP: { transition: { type: 'spring',stiffness: 100 }
  , rotate: "0deg", scale:1.1  },
  RIGHT_PRIME: {transition: { type: 'spring',stiffness: 200 }
    , rotate: "120deg", scale:1.25 },
  LEFT_PRIME: { transition: { type: 'spring',stiffness: 400 }
   , rotate: "-120deg", scale:1.25 },
  UP_PRIME: { transition: { type: 'spring',stiffness: 50 }
  , rotate: "180deg", scale:1.1  },
});
const LINE_WIDTH = 3;

const RATIO = height / width;
const ITEMS_PER_ROW = 10;
const SIZE = (width) / ITEMS_PER_ROW + 2*8 - 1;
const ROWS = Math.round((RATIO * height) / (SIZE/2));
const TOTAL_ITEMS = (ITEMS_PER_ROW) * ROWS;

const POSITIONS = ["UP","LEFT", "RIGHT", "UP_PRIME","LEFT_PRIME", "RIGHT_PRIME",];
const getRandomPosition = (arr = POSITIONS) => {
  return arr[Math.floor(Math.random() * arr.length)];
};
// Hexagon Begin
class Hexagon extends React.Component{
  render() {
    return (
      <View style={styles.hexagon}>
        <View style={styles.hexagonInner} />
        <View style={styles.hexagonBefore} />
        <View style={styles.hexagonAfter} />
      </View>
    )
  }
};
    // <Hexagon style={{zIndex:1}}>

    // </Hexagon>

  
// Hexagon End

async function changeScreenOrientation() {
  await ScreenOrientation.lockAsync(ScreenOrientation.Orientation.LANDSCAPE);
}

const Grid = ({ items }) =>
  items.map(({ key, position }) => (
    <GridItem pose={position} key={key} style={styles.gridItem}>
      <View style={styles.gridItemDiagonal} >
      </View>
    </GridItem>
  ));

  const BeamGrid = () => (
      <View style={styles.container}>
        <Grid items={this.state.items}>
        </Grid>
      </View>
    );
export default class RedGrid extends React.Component {
  animationInterval = null;
  constructor(props) {
    super(props);

    this.state = {
      items: [...Array(TOTAL_ITEMS).keys()].map(index => ({
      key: index,
      position: getRandomPosition(["UP"])
    }))
    };
  }

  constructGrid = () => {
    return [...Array(TOTAL_ITEMS).keys()].map(index => ({
      key: index,
      position: getRandomPosition()
    }));
  };

  componentDidMount() {
    changeScreenOrientation();
    StatusBar.setHidden(true);
    this.animationInterval = setInterval(() => {
      this.setState({
        items: this.constructGrid()
      });
    }, 1500);
  }

  componentWillUnmount() {
    clearInterval(this.animationInterval);
    this.animationInterval = null;
  }


  render() {
    return (
<View  style={styles.container}>
    
            <Grid items={this.state.items}>
            </Grid>
    </View>    
    );
  }
}

const styles = StyleSheet.create({
  gridItem: {
    width: SIZE,
    height: SIZE,
    alignItems: "center",
    justifyContent: "center",
    margin:-8,
    marginBottom: -10,
    marginTop: -10,
  },
  gridItemDiagonal: {
    width: LINE_WIDTH,
    height: 0.8* SIZE,
    backgroundColor: "red",
       shadowColor: 'white',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5
  },
  container: {
    flex: 1,
    paddingLeft:5,
    marginTop:-25,
    backgroundColor: "black",
    flexDirection: "row",
    flexWrap: "wrap"
  },



  hexagon: {
    width: 100,
    height: 55
  },
  hexagonInner: {
    width: 100,
    height: 55,
    backgroundColor: 'red'
  },
  hexagonAfter: {
    position: 'absolute',
    bottom: -25,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: 50,
    borderLeftColor: 'transparent',
    borderRightWidth: 50,
    borderRightColor: 'transparent',
    borderTopWidth: 25,
    borderTopColor: 'red'
  },
  hexagonBefore: {
    position: 'absolute',
    top: -25,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: 50,
    borderLeftColor: 'transparent',
    borderRightWidth: 50,
    borderRightColor: 'transparent',
    borderBottomWidth: 25,
    borderBottomColor: 'red'
  }
});

