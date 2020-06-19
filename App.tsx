import "reflect-metadata";
import React, { useContext, createContext, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';


import { AppContext } from './AppContext';
import { Application } from './application/Application';
import { ApplicationContainer } from './application/Container';
import TYPES from './application/Types';
import { ApplicationContext } from './ApplicationContext';

import { UserListScreen } from './screens/UserListScreen';

const application = ApplicationContainer.get<Application>(TYPES.Application);
 
export default function App() {
  return (
    <ApplicationContext.Provider value={application}>
    <SafeAreaView />
      <View style={styles.container}>
        <UserListScreen />
      </View>
    </ApplicationContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
