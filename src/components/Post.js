import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import { auth, db } from '../Firebase/config';
import firebase from 'firebase';
import { TextInput } from 'react-native-gesture-handler';

export default class Post extends Component{

    constructor(props){
        super(props);
        this.state = {
            liked: false,
            likes: 0,
            showModal: false,
        }
    }

    componentDidMount(){
        if (this.props.item){
            if (this.props.item.data.likes.length !== 0){
                this.setState({
                    likes: this.props.item.data.likes.length
                })
                if (this.props.item.data.likes.includes(auth.currentUser.email)){
                    this.setState({
                        liked: true
                    })
                }
            }
        }
    }

    onLike(){
        const posteoActualizar = db.collection('posts').doc(this.props.item.id)
        
        posteoActualizar.update({
            likes: firebase.firestore.FieldValue.arrayUnion(auth.currentUser.email)
        })
        .then(()=> {
            this.setState({
                liked: true,
                likes: this.state.likes + 1
            })
        })
    }

    onDislike(){
        const posteoActualizar = db.collection('posts').doc(this.props.item.id)
        
        posteoActualizar.update({
            likes: firebase.firestore.FieldValue.arrayRemove(auth.currentUser.email)
        })
        .then(()=> {
            this.setState({
                liked: false,
                likes: this.state.likes - 1
            })
        })
    }
    
    showModal(){
        console.log('Mostrando modal')
        this.setState({
            showModal: true,
        })
    }
    
    closeModal(){
        console.log('Cerrando modal')
        this.setState({
            showModal: false,
        })
    }

    render(){

        console.log(this.props.item);
        return(
            <View stlye={styles.container}>
                <Text>{this.props.item.data.description}</Text>
                <Text>{this.props.item.data.createdAt}</Text>
                <Text>{this.props.item.data.owner}</Text>
                <Text>Likes: {this.state.likes}</Text>
                {
                    !this.state.liked ?
                    <TouchableOpacity onPress = {()=> this.onLike()}>
                        <Text>
                            Like
                        </Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress = {()=> this.onDislike()}>
                        <Text>
                            Unlike
                        </Text>
                    </TouchableOpacity>
                }

                <TouchableOpacity onPress={()=>{this.showModal()}}>
                    <Text>
                        Ver comentarios
                    </Text>
                </TouchableOpacity>
                
                {
                    this.state.showModal ?

                        <Modal 
                        animationType = "fade"
                        transparent = {false}
                        visible = {this.state.showModal}
                        style = {styles.modal}
                        >
                            <View style={styles.modalView}>
                                <TouchableOpacity style={styles.closeModal} onPress={()=>{this.closeModal()}}>
                                        <Text style={styles.modalText} >X</Text>
                                </TouchableOpacity>
                                <Text> Comentario número 1! </Text>
                                <Text> Comentario número 2! </Text>
                            </View>
                        </Modal>
                        :
                        null
                }
            </View>
        )
    }
}


const styles = StyleSheet.create({
    image: {
        height: 200,
    
    },
    container:{
        flex: 1,
        justifyContent: 'center',
        padding: 10,
        
        
    }
})