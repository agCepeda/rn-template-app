import React, { Component } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { NavigationBar, View, Heading, Title, TouchableOpacity, TextInput, Screen } from '@shoutem/ui';

export default class MainScreen extends Component {
    render() {
        return (
        <Screen>
            <NavigationBar centerComponent={<Title>TITLE</Title>} />
        </Screen>
        );
    }
}