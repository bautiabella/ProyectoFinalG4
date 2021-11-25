import React, {Component} from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {auth,db} from '../Firebase/config'

export default class Perfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      };
  } 
   HandlePress() {
    console.log("me clickearon");
  }
  render (){
    return (
      <View>
        <Text>Mi Perfil</Text>
        <Text style={styles.text}>Usuario: {auth.currentUser.displayName}</Text>
        <Text style={styles.text}>E-mail: {auth.currentUser.email}</Text>
        <Text style={styles.text}>
          Última fecha de ingreso: {auth.currentUser.metadata.lastSignInTime}
        </Text>
        
        <TouchableOpacity style = {styles.button} onPress={() => this.props.handleLogout()} >
          <Text style = {styles.texto}> Cerrar sesión </Text>
        </TouchableOpacity>
        
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
