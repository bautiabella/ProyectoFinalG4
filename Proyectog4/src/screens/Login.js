import React, {Component} from 'react';
import {Text, TextInput, TouchableOpacity, View, StyleSheet} from "react-native";
import { auth } from "../Firebase/config"

export default class Login extends Component { 
    constructor(props) { 
        super(props); 
        this.state = {
            email: "",
            contraseña: "",
            loggedIn: false, 
            error: ""
        }
    }
    handleLogin() { 
        auth.signInWithEmailAndPassword (this.state.email, this.state.contraseña)
        .then (response => {
            console.log (response); 
            alert ("¡El usuario ha sido logueado con éxito!")
            this.setState ({
                loggedIn: true
            })
        })
        .catch ( error => {
            console.log (error);
            alert ("Se ha producido un error al iniciar sesión. Inténtelo de nuevo más tarde.")
            this.setState ({
                error: "Fallo a la hora de iniciar sesión"
            })
        })
    }
    render () { 
        return (
            <View style={styles.view}>
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
                    <TouchableOpacity style = {styles.button} onPress={() => this.handleLogin()}>
                        <Text style = {styles.texto}> Iniciar sesión </Text>

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