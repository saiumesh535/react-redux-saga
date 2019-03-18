import { createAction } from 'redux-actions';
import { NamesState } from './types';

const actionPrefix = (input: string) => `NAMES_${input}`;

export const NAMES_INSERT_DATA = actionPrefix('NAMES_INSERT_DATA');
export const namesInsertData = createAction<NamesState>(NAMES_INSERT_DATA);

export const UPDATE_NAMES_UPDATE = actionPrefix('UPDATE_NAMES_UPDATE');
export const updateNamesData = createAction<NamesState[]>(UPDATE_NAMES_UPDATE);