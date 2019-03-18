import { combineReducers, createStore, applyMiddleware } from 'redux'
import { NamesState } from "../app/components/names";
import namesReducer from '../app/components/names/names.reducer';
import { SagaMiddleware } from 'redux-saga';
import { middlewares } from './middlewares';

export interface AppState {
    namesState: NamesState[];
}

export const rootreducer = combineReducers<AppState>({
    namesState: namesReducer as any
});

export const initializeStore = (sagaMiddleware: SagaMiddleware) => {
    return createStore(rootreducer, applyMiddleware(...middlewares, sagaMiddleware));
};

