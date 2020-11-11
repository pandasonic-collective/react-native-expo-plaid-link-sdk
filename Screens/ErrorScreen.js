import React from 'react';
import {Text, View, Linking, StyleSheet} from 'react-native';

// var styles = require('./style');

const ErrorScreen = ({route, navigation}) => {
  const {onerror} = route.params;
  console.log(onerror);
  return (
    <View style={{flex: 1}}>
      <View style={styles.heading}>
        <Text style={styles.titleText}>
          Uh-oh! It seems something went wrong.
        </Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.baseText}>
          {' '}
          Below is the error returned.
          {'\n'}
          {'\n'}
          <Text style={(styles.bold, {color: '#000000'})}>
            {JSON.stringify(onerror)}
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default ErrorScreen;
