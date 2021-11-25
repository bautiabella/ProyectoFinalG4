import React, {Component} from 'react';
import {Text, TextInput, TouchableOpacity, View, StyleSheet, ScrollView} from "react-native";
import { auth } from "../Firebase/config"

export default class Login extends Component { 
    constructor(props) { 
        super(props); 
        this.state = {
            email: "",
            contraseña: "",
            error: ""
        }
    }
    
    render () { 
        return (
            <ScrollView>
            <View style = {styles.container}>
                <Text style={styles.texto}> Inicio de sesión </Text>
                <TextInput
                    style = {styles.emailentry}
                    keyboardType = "email-address"
                    placeholder = "escriba su email"
                    onChangeText = { texto => this.setState({email: texto})}
                    />
                   <TextInput style = {styles.passentry}
                    keyboardType = 'default'
                    placeholder = "escriba su contraseña"
                    secureTextEntry = {true}
                    onChangeText = { texto => this.setState({contraseña: texto})}
                    />
                    <TouchableOpacity style = {styles.button} onPress={() => this.props.handleLogin(this.state.email, this.state.contraseña)}>
                        <Text style = {styles.texto}> Iniciar sesión </Text>

                    </TouchableOpacity>
            </View> 
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "lightblue",
        textAlign: 'center'
    }, 
    texto: { 
        textAlign: 'center'
    }, 
    emailentry: { 
        backgroundColor: "lightgrey",
        fontSize: 20,
        margin: 30,
        textAlign: 'center'
    },
    passentry: { 
        backgroundColor: "lightgrey",
        fontSize: 20,
        margin: 30,
        textAlign: 'center'
    }, 
    button: { 
        border: "radius",
        backgroundColor: "lightgrey",
        margin: 15,
        textAlign: 'center'
    },
    
})