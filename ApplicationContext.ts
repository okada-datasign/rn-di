import React, { createContext } from 'react';
import { Application } from './application/Application';

export const ApplicationContext = createContext<Application>(new Application);
