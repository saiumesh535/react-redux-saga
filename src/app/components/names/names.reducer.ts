import { NamesState } from "./types";
import { ReducerFactory } from 'redux-actions-ts-reducer';
import { namesInsertData, updateNamesData } from "./names.actions";

const initialState: NamesState[] = [];

const namesReducer = new ReducerFactory<NamesState[]>(initialState)
    .addReducer<NamesState[]>(updateNamesData, (_, action): NamesState[] => {
        return action.payload as NamesState[];
    })
    .toReducer();

export default namesReducer;
