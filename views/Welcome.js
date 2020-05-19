import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import globalStyles from '../globalStyles.js';
import { TouchableHighlight } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2FFFF',
    paddingVertical: 80,
    paddingHorizontal: 50,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  image: {
    marginTop: 40,
  },
  text: {
    marginTop: 30,
    marginBottom: 30,
    fontSize: 24,
    lineHeight: 33,
    textAlign: 'center',
    color: '#829797'
  },
  buttonWrapper: {
    width: '100%',
  }
});

export default class Welcome extends Component {
  render() {
    const { navigate } = this.props.navigation
     return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('../img/logo.png')} />
        <Text style={styles.text}>
          Never forget where you parked your car with Autohulp™ by Gegel AG
        </Text>
        <View style={styles.buttonWrapper}>
          <TouchableHighlight
            style={globalStyles.button}
            underlayColor={'#FFFFFF'}
            onPress={() => navigate('AddCar')}
          >
            <Text style={globalStyles.buttonText}>
              Add New Car
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={globalStyles.button}
            underlayColor={'#FFFFFF'}
            onPress={() => navigate('EnterCode')}
          >
            <Text style={globalStyles.buttonText}>
              Enter Code
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}
