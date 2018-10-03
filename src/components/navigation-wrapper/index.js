import React, { Component } from "react"
import { NavigationBar, Title, View } from '@shoutem/ui'

export default class NavigationWrapper extends Component {
    render(props) {
        console.log("NavigationWrapper[Props]", props)
        return (<View><NavigationBar styleName="inline" centerComponent={<Title>TITLE</Title>}/></View>)
    }
}