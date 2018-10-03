/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import RootStack from './routes/main-router'

export default class App extends Component {
    render() {
        return (<RootStack />)
    }
}
