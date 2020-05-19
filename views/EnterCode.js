import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Alert, TextInput } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import globalStyles from '../globalStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2FFFF',
    paddingVertical: 80,
    paddingHorizontal: 50,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  image: {},
  text: {
    fontSize: 32,
    lineHeight: 39,
  },
  inputWrapper:{
    width: '100%'
  },
  inputLabel:{
    color: '#989898',
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'left',
    marginBottom: 6,
  },
  textInput: {
    color: '#000000',
    fontSize: 24,
    lineHeight: 29,
    borderColor: '#BFBFBF',
    borderWidth: 2,
    width: '100%',
    height: 47,
    padding: 10,
    marginBottom: 16,
  },
  buttonWrapper: {
    width: '100%'
  },
});

export default class EnterCode extends Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('../img/icon.png')} />
        <Text style={styles.text}>Enter Code</Text>

        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Autohulp Car Code</Text>
          <TextInput
            style={styles.textInput}
            placeholder={'xh3dc39'}
            placeholderTextColor={'#989898'}
          ></TextInput>
        </View>

        <View style={styles.buttonWrapper}>
          <TouchableHighlight
            style={globalStyles.button}
            underlayColor={'#FFFFFF'}
            onPress={() => Alert.alert('Car added')}
          >
            <Text style={globalStyles.buttonText}>
              Add Car
            </Text>
          </TouchableHighlight>
        </View>

      </View>
    )
  }
}