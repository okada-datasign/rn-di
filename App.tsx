import React, { useContext } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import { AppContext } from './AppContext';
import { Application } from './application/application';
import { PdsDataGetInteractor } from './application/interactors/PdsData/get';
import { SamplePdsDataRepository } from './application/infrastracture/sample/SamplePdsDataRepository';

import { PdsDataView } from './PdsDataView';

const pdsDataRepository = new SamplePdsDataRepository();
const pdsDataGetInteractor = new PdsDataGetInteractor(pdsDataRepository);
const app: Application = {
  PdsDataGet: pdsDataGetInteractor,
};

export default function App() {
  return (
    <AppContext.Provider value={app}>
      <SafeAreaView />
      <View style={styles.container}>
        {/* <Text>Open up App.tsx to start working on your app!</Text> */}
        <PdsDataView />
      </View>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
