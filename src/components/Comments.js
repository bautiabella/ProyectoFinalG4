import React, {Component} from 'react';
import {Text, TextInput, TouchableOpacity, View, StyleSheet, FlatList, Modal} from "react-native";
import { auth, db } from "../Firebase/config";
import firebase from "firebase";


export default class Comments extends Component { 
    constructor(props) { 
        super(props); 
        this.state = {
            comentario: ""
        }
    }
    onComment (){ 
        
        const posteo = db.collection("posts").doc(this.props.idPost)
        posteo.update({
            comments: firebase.firestore.FieldValue.arrayUnion({
                id: Date.now(), 
                email: auth.currentUser.email,
                owner: auth.currentUser.displayName,
                comment: this.state.comentario
            })
        })
        .then(()=>{
            this.setState({
                input: ""
            })
        })
    }
    
    render () { 
        return (
            <View style={styles.view}>

                 <Modal 
                        animationType = "fade"
                        transparent = {false}
                        visible = {this.state.showModal}
                        style = {styles.modal}
                        >
                          
                        
                 <TouchableOpacity style={styles.closeModal} onPress={()=>{this.props.closeModal()}}>
                                        <Text style={styles.modalText} >X</Text>
                                </TouchableOpacity>
                <FlatList 
        data= {this.props.comentarios}
        keyExtractor = {comentario => comentario.id.toString()}
        renderItem={({ item }) =>
    <Text> {item.owner}: {item.comment} </Text>    
    }
        />
                   <TextInput style = {styles.passentry}
                    keyboardType = 'default'
                    placeholder = "escriba un comenatario"
                    onChangeText = { texto => this.setState({comentario: texto})}
                    value={this.state.input}
                    />
                    <TouchableOpacity style = {styles.button} onPress={() => this.onComment()}>
                        <Text style = {styles.texto}> Comentar </Text>

                    </TouchableOpacity>
                    </Modal>
            </View> 
        )
    }
}

const styles = StyleSheet.create ({
    view: { 
        flex: 1, 
        alignItems: 'center'
    }, 
    texto: { 

    }, 
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
    
})