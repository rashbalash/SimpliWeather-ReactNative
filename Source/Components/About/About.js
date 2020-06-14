import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Modal, TouchableOpacity, Image, Linking } from 'react-native';
import { IconButton, Button } from 'react-native-paper';
import { SocialIcon } from 'react-native-elements';

export default function About(props) {

    const FALink = 'https://fracturedaperture.com/';
    const GithubLink = 'https://github.com/rashbalash';
    const LinkedinLink = 'https://www.linkedin.com/in/rashadbalashov/';

    return (
        
        <Modal
            animationType="fade"
            transparent={true}
            visible={props.isModalOpen}
            onRequestClose={props.closeModal}
            
        >
        <ScrollView>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
         
            
            <View style={ styles.modalHeader}>
              <Text style={ styles.aboutTitle }>About</Text>
              <IconButton
                icon="close"
                size={30}
                onPress={() => props.closeModal()}
                style={styles.closeButton}
              />
              
            </View>
            <Image source={require('./profile.jpg')} style={ styles.aboutImage } />

            <Text style={ styles.aboutDescription }>
                Hello! My name is Rashad Balashov, I am the creator and developer of SimpliWeather. 
                I designed and built SimpliWeather from the ground up with React Native and OpenWeatherMap's API. 
                I have a deep interest in creating tools and products for people that can better help them in their daily life.
                Check out the rest of my projects, and if you'd like to contribute to this project, checkout my GitHub as well.
            </Text>

            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                marginTop: 20,
                marginBottom: 20,
                alignSelf: 'stretch',
              }}
            ></View>

            <View style={ styles.socialIcons }>
              <TouchableOpacity onPress={() => Linking.openURL(FALink)}>
                <Image source={require('./FALogo.jpg')} style={ styles.faLogo } />
              </TouchableOpacity>
              <SocialIcon
                onPress={() => Linking.openURL(GithubLink)}
                raised={false}
                type='github'
                style={ styles.iconStyle }
              />
              <SocialIcon
                onPress={() => Linking.openURL(LinkedinLink)}
                raised={false}
                type='linkedin'
                style={ styles.iconStyle }
              />
              <TouchableOpacity onPress={() => Linking.openURL('mailto:rashad.balashov@gmail.com')}>
                <Image source={require('./email.png')} style={ styles.faLogo } />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        </ScrollView>
        </Modal>
    );
}

const styles = StyleSheet.create({
  modalHeader: {
    flexDirection: "row",
    flexWrap: 'nowrap',
    alignItems: "center",
    justifyContent: "center",
    minWidth: "100%",

  },
  closeButton: {
    // alignSelf: "flex-end",
    position: 'absolute',
    right: 0,
    top: 0,
    height: 30,
    width: 30,
  },
  aboutTitle: {
    fontSize: 24,
  },
  aboutDescription: {
    fontSize: 15,
    textAlign: "center",
  },
  aboutImage: {
    height: 300,
    maxWidth: '100%',
    borderRadius: 150,
    marginTop: 20,
    marginBottom: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  socialIcons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  iconStyle: {
    marginBottom: 0,
    marginTop: 0
  },
  faLogo: {
    height: 52,
    width: 52,
    borderRadius: 50,
    marginLeft: 7,
    marginRight: 7,
  }
});