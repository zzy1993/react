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
  View
} from 'react-native';

let Dimensions = require('Dimensions');
let PixelRatio = require('PixelRatio');
let totalWidth = Dimensions.get('window').width;
let totalHeight = Dimensions.get('window').height;
let pixelRatio = PixelRatio.get();

export default class galler extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          pixelRatio = {pixelRatio};
        </Text>
        <Text style={styles.instructions}>
          totalHeight={totalHeight};
        </Text>
        <Text style={styles.instructions}>
            totalWidth={totalWidth};
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('galler', () => galler);
