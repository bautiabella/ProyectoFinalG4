import React, {Component} from 'react';
import {Text, TextInput, TouchableOpacity, View, StyleSheet} from "react-native";
import { auth } from "../Firebase/config"

export default class Register extends Component { 
    constructor(props) { 
        super(props); 
        this.state = {
            email: "",
            contraseña: "", 
            error: "",
            username: ""
        }
    }
   
    render () { 
        return (
            <View style={styles.view}>
                <Text style={styles.texto}> Página de Register </Text>
                <TextInput
                    style = {styles.emailentry}
                    keyboardType = "default"
                    placeholder = "username"
                    onChangeText = { texto => this.setState({username: texto})}
                    />
                    <TextInput
                    style = {styles.emailentry}
                    keyboardType = "email-adress"
                    placeholder = "email"
                    onChangeText = { texto => this.setState({email: texto})}
                    />
                   <TextInput
                    style = {styles.passentry}
                    keyboardType = 'default'
                    placeholder = "escriba su contraseña"
                    secureTextEntry = {true}
                    onChangeText = { texto => this.setState({contraseña: texto})}
                    />
                    <TouchableOpacity style = {styles.button} onPress={() => this.props.handleRegister(this.state.username,this.state.email,this.state.contraseña)}>
                        <Text style = {styles.texto}> Registrarme </Text>
                    </TouchableOpacity>
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