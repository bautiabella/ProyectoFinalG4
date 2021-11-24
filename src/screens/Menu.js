import React, {Component } from "react";
//import React, {xpo } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import Perfil from './Perfil'
import {auth} from '../Firebase/config'
import CreatePost from "./CreatePost";

export default class Menu extends Component{
    constructor (props){
        super(props)
        this.state={
            loggedIn:false,
            error:null,
        }
    }

    componentDidMount(){
        auth.onAuthStateChanged(user =>{
            if (user){
                this.setState({
                    loggedIn:true
                })
            }
        })
    }
   

        handleLogin(email,contraseña) { 
            auth.signInWithEmailAndPassword (email, contraseña)
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
        handleRegister(email,contraseña,username) { 
            auth.createUserWithEmailAndPassword(email,contraseña)
            .then (response => {
                console.log (response); 
                alert ("¡El usuario ha sido registrado con éxito!");
                response.user.updateProfile({
                    displayName: username
                })
                this.setState ({
                    loggedIn: true
                })
            })
            .catch ( error => {
                console.log (error);
                alert ("Se ha producido un error al realizar el registro. Inténtelo de nuevo más tarde.")
                this.setState ({
                    error: "Fallo en el registro"
                })
            })
        }

        handleLogout(){
            auth.signOut()
            .then(()=>{
                this.setState({
                    loggedIn:false
                })
            })
            .catch(error=>{
                console.log(error);
            })
        }
        render(){
            const Drawer = createDrawerNavigator ();
        return(
            <NavigationContainer> 
      <Drawer.Navigator initialRouteName= "Login">

          {this.state.loggedIn === true ?
          <>
          <Drawer.Screen name= "Home">
          {props => <Home {...props} />}
          </Drawer.Screen> 

          <Drawer.Screen name= "Perfil">
          {props => <Perfil {...props}  handleLogout={()=> this.handleLogout()}/>}
          </Drawer.Screen>

          <Drawer.Screen name= "CreatePost">
          {props => <CreatePost {...props}/>}
          </Drawer.Screen>
          </>
        :
        <>
        <Drawer.Screen name= "Register">
            {props => <Register {...props}  handleRegister={(email,contraseña,username)=> this.handleRegister(email,contraseña,username)}/>}
            </Drawer.Screen>
        <Drawer.Screen name= "Login">
            {props => <Login {...props}  handleLogin={(email,contraseña)=> this.handleLogin(email,contraseña)}/>}
            </Drawer.Screen>
            </>
        }
      </Drawer.Navigator>
    </NavigationContainer>
        )
    }
}