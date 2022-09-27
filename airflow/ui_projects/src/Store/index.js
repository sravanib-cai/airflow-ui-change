import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import storage from 'redux-persist/lib/storage';
import * as reducers from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
  transforms: [
    encryptTransform({
    //   secretKey: process.env.REACT_APP_ENCRYPTION_AES_KEY,
      secretKey: 'my-super-secret-key',
      onError() {
        global.window.location.pathname = '/';
      },
    }),
  ],
};

const environment = process.env.NODE_ENV;
const composeEnhancers = global.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({ ...reducers.reducers });
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = environment === 'development'
  ? createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)))
  : createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);
