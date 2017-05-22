/*
  Test with Menu
*/

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';

export default class MenuTest extends Component {
  render() {
    return (
      <MenuContext style={{ flex: 1 }}>
        <TopNavigation />
        <View style={styles.containerRoot} >
          <Text style={styles.textStyle}>Hello world!</Text>
        </View>
      </MenuContext>
    )
  }
}

const TopNavigation = () => (
  <View style={{ padding: 10, flexDirection: 'row', backgroundColor: 'lightblue' }}>
    <View style={{ flex: 1 }}><Text>My App</Text></View>
    <Menu onSelect={(value) => alert(`User selected the number ${value}`)}>
      <MenuTrigger>
        <Text style={{ fontSize: 20 }}>&#8942;</Text>
      </MenuTrigger>
      <MenuOptions>
        <MenuOption value={1}>
          <Text>One</Text>
        </MenuOption>
        <MenuOption value={2}>
          <Text>Two</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  </View>
)

const styles = StyleSheet.create({
  containerRoot: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

AppRegistry.registerComponent('MenuTest', () => MenuTest);
