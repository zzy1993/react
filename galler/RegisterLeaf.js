/**
 * Created by Aleph on 11/01/2017.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

let Dimensions = require('Dimensions');
let PixelRatio = require('PixelRatio');
let totalWidth = Dimensions.get('window').width;
let totalHeight = Dimensions.get('window').height;
let componentWidth = totalWidth * 0.8;
let leftStartPoint = totalWidth * 0.1;
let pixelRatio = PixelRatio.get();

export default class RegisterLeaf extends Component {
  constructor(){
    super();
    this.state = {inputNum: '', inputPW: ''};
  }
  updateNum(newText) {
    this.setState((state) => {
      return {
        inputNum: newText
      };
    });
  }
  updatePW(newText) {
    this.setState((state) => {
      return {
        inputPW: newText
      };
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.numberInputStyle} placeholder={'Please input mobile number'}
                   onChangeText={(newText)=>this.updateNum(newText)}/>
        <Text style={styles.textPromptStyle}>
          The mobile number you have input: {this.state.inputNum}
        </Text>
        <TextInput style={styles.passwordInputStyle} placeholder={'Please enter password'} password={true}
                   onChangeText={(newText)=>this.updatePW(newText)}/>
        <Text style={styles.bigTextPrompt}>
          Submit
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  numberInputStyle: {
    top: 40,
    left: leftStartPoint,
    width: componentWidth,
    height: 60,
    backgroundColor: 'powderblue',
    fontSize: 20,
  },
  textPromptStyle: {
    top: 60,
    left: leftStartPoint,
    width: componentWidth,
    fontSize: 20,
  },
  passwordInputStyle: {
    top: 100,
    left: leftStartPoint,
    width: componentWidth,
    height: 60,
    backgroundColor: 'powderblue',
    fontSize: 20,
  },
  bigTextPrompt: {
    top: 140,
    left: leftStartPoint,
    width: componentWidth,
    backgroundColor: 'steelblue',
    color: 'white',
    textAlign: 'center',
    fontSize: 60,
  },
});

module.exports = RegisterLeaf;
