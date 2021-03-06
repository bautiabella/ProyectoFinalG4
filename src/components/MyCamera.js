import { Camera } from "expo-camera";
import react from 'react'
import React, { Component } from "react";
import {Text,TextInput,TouchableOpacity,View,StyleSheet,Image,} from "react-native";
import { db,storage } from "../Firebase/config";
import Ionicons from "react-native-vector-icons/Ionicons";


export default class MyCamera extends React.Component {
  constructor(props) {
    super(props);
    this.Camera;
    this.state = {
      photo: '',
      permission: false,
    }
  } // Constructor

  componentDidMount() {
    Camera.requestCameraPermissionsAsync()
    .then((response) => {
      console.log(response);
      this.setState({
        permission: response.granted,
      });
    });
  }

  takePicture() {
    if (!this.camera) return;
    this.camera.takePictureAsync().then((photo) => {
      this.setState({
        photo: photo.uri,
      });
    });
  }

  uploadImage() {
    fetch(this.state.photo)
      .then(res => {
        return res.blob();
      })
      .then((image) => {
        const ref = storage.ref(`camera/${Date.now()}.jpg`);
        ref.put(image)
        .then(() => {

          ref.getDownloadURL()
          .then(url => {
            console.log(url);
            this.setState({
              photo: '',
            })
            this.props.savePhoto(url);
          })
        })
      })
  }

  onReject() {
    this.setState({
      photo: "",
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {
        this.state.photo ? 
          <>
            <Image style={styles.preview} source={{ uri: this.state.photo }} />
            <View style={styles.uploadImage}>
              <TouchableOpacity onPress={() => this.uploadImage()}>
                <Ionicons name="checkmark-circle-outline" size="50px" color="green"/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.onReject()}>
                <Ionicons name="close-circle-outline" size="50px" color="red"/>
              </TouchableOpacity>
        </View> 
          </>
         : 
          <>
            <Camera
              style={styles.camera}
              type={Camera.Constants.Type.front || Camera.Constants.Type.back}
              ref={(ref) => (this.camera = ref)}
            />
            <TouchableOpacity style={styles.uploadImage} onPress={() => this.takePicture()}>
              <Ionicons
                name="aperture-outline"
                size="50px"
                color="white"
              />
            </TouchableOpacity>
          </>
        }
      </View>
    );
  }
} // Create Post

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  preview: {
    flex: 1,
    width: "100%",
  },
  camera: {
    width: "100%",
    backgroundColor: '#001219',
  },
  uploadImage: {
    flexDirection: 'row',
    padding: 10,
    width: '100%',
    justifyContent: 'space-around',
    backgroundColor: '#001219',
  }
});