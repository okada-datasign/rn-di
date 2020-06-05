import React from 'react';

import { Application } from './application/application';
import { PdsDataGetInteractor } from './application/interactors/PdsData/get';
import { SamplePdsDataRepository } from './application/infrastracture/sample/SamplePdsDataRepository';

const pdsDataRepository = new SamplePdsDataRepository();
const pdsDataGetInteractor = new PdsDataGetInteractor(pdsDataRepository);
const app: Application = {
  PdsDataGet: pdsDataGetInteractor,
};

export const AppContext = React.createContext<Application>(app);