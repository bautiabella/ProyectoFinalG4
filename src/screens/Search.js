import React, {Component} from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList, TextInput, ScrollView} from "react-native";
import {auth,db} from '../Firebase/config'
import Post from '../components/Post';

export default class Perfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      posts: []
      };
  } 
  onSearch (){
    db.collection('posts')

    .where('owner', '==', this.state.input)
    
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
        
        <TextInput
                    style={styles.field}
                    keyboardType='default'
                    placeholder= "Buscar usuario"
                    onChangeText={text => this.setState({input: text })}
                    value= {this.state.input}
                   
                />

        <TouchableOpacity style = {styles.button} onPress={() => this.onSearch()} >
          <Text style = {styles.texto}> Buscar</Text>
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
    textAlign: 'center'
  },
  
  button: {
    border: "radius",
    backgroundColor: "lightgrey",
    margin: 15,
    alignSelf: 'center',
    textAlign: 'center'
  },
  field: {
    backgroundColor: "lightgrey",
    margin: 15,
    borderColor: 'blue',
    textAlign: 'center'
  }
});
