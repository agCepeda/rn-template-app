import React from 'react'
import { createStackNavigator } from 'react-navigation'
import AccountListScreen from '../screens/account-list'
import NavigationWrapper from '../components/navigation-wrapper'

let headerDefaultNavigationConfig = {
    header: props => <NavigationWrapper {...props} />
}

export default MainRouter = createStackNavigator({
    AccountList: {
        screen: AccountListScreen
    }
},
{
  initialRouteName: 'AccountList',
  navigationOptions: {
      ...headerDefaultNavigationConfig
  }
})