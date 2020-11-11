import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
///Screens
import Plaid        from '../Screens/Plaid'
import ErrorScreen  from '../Screens/ErrorScreen'
import SuccessScreen from '../Screens/SuccessScreen'

const Navigator = createStackNavigator({
    Plaid: Plaid,
    Error: ErrorScreen,
    Success: SuccessScreen,
})

export default createAppContainer(Navigator)
