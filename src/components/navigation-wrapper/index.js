import React, { Component } from "react"
import { NavigationBar, Title, View, Icon } from '@shoutem/ui'

export default class NavigationWrapper extends Component {
    render(props) {
        console.log("NavigationWrapper[Props]", props)
        return (
        <View>
            <NavigationBar
                styleName="inline"
                leftComponent={<Icon name="sidebar" />}
                centerComponent={<Title>TITLE</Title>}/>
        </View>
        )
    }
}