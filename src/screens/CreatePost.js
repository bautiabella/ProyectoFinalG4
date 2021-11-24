import { description } from 'commander';
import React, {Component} from 'react';
import { Text, TextInput, TouchableOpacity, View, StyleSheet} from 'react-native';
import { auth, db } from '../Firebase/config';
import MyCamera from '../components/MyCamera'
export default class CreatePost extends Component {
    constructor(props){
        super(props);
        this.state = {
            comment: "",
            photo: "",
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
            comments: []
        })
        .then(response => {
            console.log(response); 
            alert ('posteo realizado')
            this.setState ({
                comment: ""
            })
            this.props.navigation.navigate ('Home');
        }) 
        .catch(error =>{
            console.log(error); 
            alert ('hubo un error')
        })

    }
    render(){
        
        return(
            <>
            {this.state.showCamera ?
            <MyCamera/>
        :
        
            <View style={styles.container}>
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
           }
         </>
           )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    field: {
        width: '80%',
        backgroundColor: "#09009B",
        color: '#FFA400',
        padding: 10,
        marginVertical: 10
    },
    button: {
        width: '30%',
        backgroundColor: "#0F00FF",
    },
    text: {
        color: '#FFA400',
        fontSize: 20
    },
    imagen: {
        height: 300,
        width: '90%'
    }
})