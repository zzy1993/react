/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { AppRegistry, Navigator, BackAndroid } from 'react-native';
var RegisterLeaf = require('./RegisterLeaf');
var WaitingLeaf = require('./WaitingLeaf');

export default class galler extends Component {
  configureScene(route){
    return Navigator.SceneConfigs.FadeAndroid;
  }
  renderScene(router, navigator) {
    this._navigator = navigator;
    switch (router.name) {
      case "register":
        return <RegisterLeaf navigator={navigator}/>;
      case "waiting":
        return <WaitingLeaf phoneNumber={router.phoneNumber} userPW={router.userPW} navigator={navigator}/>;
    }
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

AppRegistry.registerComponent('galler', () => NaviModule);
