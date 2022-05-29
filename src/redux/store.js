import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';


export const Store = configureStore({reducer: reducer});