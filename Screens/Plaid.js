import React, { Component } from 'react';
import { StyleSheet, Text, Button, TouchableOpacity } from 'react-native'
import PlaidLink, { usePlaidEmitter } from 'react-native-plaid-link-sdk';
import plaid from 'plaid'

const client = new plaid.Client({
    clientID: 'CID',
    secret: 'SECRET',
    env: plaid.environments.sandbox,
});

const getToken = async () => {
    const tokenResponse = await client.createLinkToken({
        user: {
            client_user_id: 'Test_123',
        },
        client_name: 'My App',
        products: ['transactions'],
        country_codes: ['US'],
        language: 'en',
        webhook: 'https://webhook.sample.com'
    })
    .catch(err => console.log('ERR', err))
    return tokenResponse.link_token
}

const AppButton = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

class Plaid extends Component {
    state = {
        token: null
    }
    componentDidMount(){
        getToken()
        .then(token => this.setState({
            token
        }))
    }
    render(){
        const { token } = this.state
        const { navigation } = this.props
        if(!token) return null
        return (
            <PlaidLink
                token={token}
                onSuccess={(data) => {
                    navigation.navigate('Success', {onsuccess: data})
                    console.log(data)
                }}
                onExit={(data) => {
                    navigation.navigate('Error', {onerror: data})
                    console.log(data)
                }}
                component={AppButton}
                componentProps={{title: 'Open Link'}}>
            </PlaidLink>
  )
    }

}

const styles = StyleSheet.create({
  // ...
  appButtonContainer: {
    elevation: 4,
    backgroundColor: '#000',
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default Plaid
