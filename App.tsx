import "reflect-metadata";
import React, { useContext, createContext, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import { AppContext } from './AppContext';
import { Application } from './application/application';
import { PdsDataGetInteractor } from './application/interactors/PdsData/get';
import { SamplePdsDataRepository } from './application/infrastracture/sample/SamplePdsDataRepository';

import { PdsDataView } from './PdsDataView';

import { FooApplication, FooAppContext, User, TYPES } from './FooApplication';
import { FooView } from './FooView';
import { container } from './inversity.config';

const pdsDataRepository = new SamplePdsDataRepository();
const pdsDataGetInteractor = new PdsDataGetInteractor(pdsDataRepository);
const app: Application = {
  PdsDataGet: pdsDataGetInteractor,
};

const fooApplication = container.get<FooApplication>(TYPES.Application);

export default function App() {
  const [user, setUser] = useState<User>(new User());

  return (
    <AppContext.Provider value={app}>
      <FooAppContext.Provider value={fooApplication}>
      <SafeAreaView />
        <View style={styles.container}>
          {/* <Text>Open up App.tsx to start working on your app!</Text> */}
          {/* <PdsDataView /> */}
          <FooView />
        </View>
      </FooAppContext.Provider>
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
