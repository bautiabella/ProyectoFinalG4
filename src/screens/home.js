import React, {Component} from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList, ScrollView } from "react-native";
import Post from "../components/Post"
import {db} from "../Firebase/config"

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
      
      }
  }  
   
  componentDidMount (){
    db.collection('posts').orderBy("createdAt", "desc").onSnapshot(
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


  render (){
    return (
      <ScrollView>
      <View style = {styles.container}>
        <Text>Home</Text>
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
  texto: {
    
  },
  button: {
    border: "radius",
    backgroundColor: "lightgrey",
    margin: 15,
    width: 1000,
  },
});
