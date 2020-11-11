import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ToastAndroid,
  Platform,
  AlertIOS,
} from 'react-native';
import {Linking, TouchableOpacity} from 'react-native';

const SuccessScreen = ({route, navigation}) => {
  const {onsuccess} = route.params;
  return (
    <View style={{flex: 1}}>
      <View style={styles.heading}>
        <Text style={styles.titleText}>Congratulations!</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.baseText}>
          You did it! See, that wasn't so hard :) {'\n'}
          {'\n'}
          {'\n'}The next step is adding the React Native SDK to your app. {'\n'}
          {'\n'}1) Send the public token shown above to your server to exchange
          it for an access token and get access to your data {'\n'}
          {'\n'}2) Visit{' '}
          <Text
            style={{color: '#0A85EA'}}
            onPress={() =>
              Linking.openURL('https://github.com/plaid/react-native-plaid-link-sdk')
            }>
            https://github.com/plaid/react-native-plaid-link-sdk
          </Text>{' '}
          for more information on how to integrate {'\n'}
          {'\n'}3) Ready for the big leagues? Unlock production access by
          visiting{' '}
          <Text
            style={{color: '#0A85EA'}}
            onPress={() => Linking.openURL('http://plaid.com/contact')}>
            http://plaid.com/contact
          </Text>
        </Text>
        <TouchableOpacity>

            <Text style={styles.bold}>
              Public Token: {onsuccess.public_token}
            </Text>

        </TouchableOpacity>
      </View>
    </View>
  );
};

const successStyles = StyleSheet.create({
    heading: {
      alignItems: 'center',
      paddingHorizontal: 32,
      justifyContent: 'flex-start',
      backgroundColor: '#FFFFFF',
      paddingBottom: 32,
    },
    body: {
      flex: 1,
      paddingHorizontal: 32,
      flexDirection: 'column',
      alignItems: 'stretch',
      justifyContent: 'flex-start',
      backgroundColor: '#FFFFFF',
    },
    baseText: {
      fontSize: 16,
      marginTop: 8,
      color: '#4B4B4B',
      textAlign: 'left',
    },
    titleText: {
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 36,
      marginHorizontal: 10,
    },
    bottom: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: '#FFFFFF',
      paddingHorizontal: 32,
      paddingBottom: 32,
    },
  publicKey: {
    fontSize: 18,
    marginTop: 16,
    color: '#000000',
    textAlign: 'left',
  },
});

function notifyMessage(msg: string) {
  if (Platform.OS === 'android') {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  } else {
    AlertIOS.alert(msg);
  }
}

export default SuccessScreen;
