import React, {Component} from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      };
  }  
   
  render (){
    return (
      <View>
        <Text>Home</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
  },
  texto: {},
  emailentry: {
    backgroundColor: "lightblue",
    fontSize: 20,
    margin: 30,
  },
  passentry: {
    backgroundColor: "lightblue",
    fontSize: 20,
    margin: 30,
  },
  button: {
    border: "radius",
    backgroundColor: "grey",
    margin: 15,
  },
});
