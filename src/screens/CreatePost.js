import { description } from 'commander';
import React, {Component} from 'react';
import { Text, TextInput, TouchableOpacity, View, StyleSheet, Image, ScrollView} from 'react-native';
import { auth, db } from '../Firebase/config';
import MyCamera from '../components/MyCamera'

export default class CreatePost extends Component {
    constructor(props){
        super(props);
        this.state = {
            comment: "",
            photo: '',
            showCamera: true
        }
    }
    
    handlePost () {
        db.collection('posts').add({
            owner:  auth.currentUser.displayName ,
            description: this.state.comment ,
            email: auth.currentUser.email,
            createdAt: Date.now(),
            likes: [],
            comments: [],
            photo: this.state.photo
        })
        .then(response => {
            console.log(response); 
            alert ('posteo realizado')
            this.setState ({
                comment: "",
                photo: '',
                showCamera: true
            })
            this.props.navigation.navigate ('Home');
        }) 
        .catch(error =>{
            console.log(error); 
            alert ('hubo un error')
        })

    }

    guardarFoto(url){
        this.setState({
            photo: url,
            showCamera: false,

        })
    }
    render(){
        
        return(
            
            <>
            {this.state.showCamera ?
            <MyCamera savePhoto = {(url)=>this.guardarFoto(url)}/>
            :
         
        <>
        <ScrollView> 
            <View style={styles.container}>
            <Image
        source = {{uri: this.state.photo}}
        style = {styles.imagen}

          />
                <TextInput
                    style={styles.field}
                    keyboardType='default'
                    placeholder="¿Qué está pasando?"
                    multiline={true}
                    numberOfLines = {4}
                    onChangeText={text => this.setState({comment: text })}
                    value= {this.state.comment}
                   
                />
                <TouchableOpacity style = {styles.button} onPress={() => this.handlePost()}>
                    <Text style = {styles.text}> Post </Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
            </>
           }
            
         </>
         
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "lightblue",
    },
    field: {
        width: '80%',
        backgroundColor: "lightgrey",
        color: 'black',
        padding: 10,
        marginVertical: 10
      
    },
    button: {
        width: '30%',
        backgroundColor: "lightgrey",
    },
    text: {
        color: '#FFA400',
        fontSize: 20
    },
    imagen: {
        height: 600,
        width: '70%'
    },

})