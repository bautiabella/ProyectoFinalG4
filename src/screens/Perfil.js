import React, {Component} from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList, ScrollView} from "react-native";
import {auth,db} from '../Firebase/config';
import Post from '../components/Post'

export default class Perfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
      };
  } 

  componentDidMount (){
    db.collection('posts')

    .where('owner', '==', auth.currentUser.displayName)
    
    .onSnapshot(
      docs =>{
        let postsAux= []
        docs.forEach(doc => { 
          postsAux.push ({
            id: doc.id, 
            data: doc.data ()
          })
        })
          this.setState ({
            posts: postsAux
          })
        }
    )
  }
   HandlePress() {
    console.log("me clickearon");
  }
  render (){
    return (
      <ScrollView>
      <View style = {styles.container}>
        <Text>Mi Perfil</Text>
        <Text style={styles.text}>Usuario: {auth.currentUser.displayName}</Text>
        <Text style={styles.text}>E-mail: {auth.currentUser.email}</Text>
        <Text style={styles.text}>
          Última fecha de ingreso: {auth.currentUser.metadata.lastSignInTime}
        </Text>
        
        <TouchableOpacity style = {styles.button} onPress={() => this.props.handleLogout()} >
          <Text style = {styles.texto}> Cerrar sesión </Text>
        </TouchableOpacity>

        <FlatList 
        data= {this.state.posts}
        keyExtractor = {post => post.id.toString()}
        renderItem={({ item }) =>
        <Post item = {item}> </Post> }
        />
      </View>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "lightblue",
  },
  
  button: {
    border: "radius",
    backgroundColor: "lightgrey",
    margin: 15,
  },
});
