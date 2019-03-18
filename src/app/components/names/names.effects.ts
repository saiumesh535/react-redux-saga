import { takeEvery, select, put } from "redux-saga/effects";
import { Action } from "redux";
import { NamesState } from "./types";
import { NAMES_INSERT_DATA, updateNamesData } from "./names.actions";
import { namesState } from "./names.selector";

interface InsertUSerData extends Action {
    payload: NamesState;
}

function* insertUserData(action: InsertUSerData): any {
   // fake network call
   let currensNamesState = yield select(namesState);
   currensNamesState = [...currensNamesState, action.payload ];
   yield put(updateNamesData(currensNamesState));
}

export const namesEffect = [
    takeEvery(NAMES_INSERT_DATA, insertUserData)
];
