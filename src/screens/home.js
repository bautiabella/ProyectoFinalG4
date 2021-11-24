import React, {Component} from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import Post from "../components/Post"
import { db } from "../Firebase/config";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
      }
  }  
   
  componentDidMount (){
    db.collection('posts').onSnapshot(
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
      <View>
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
    fontSize: 40,
    margin: 40,
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
