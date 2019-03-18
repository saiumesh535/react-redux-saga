import { all } from 'redux-saga/effects';
import { namesEffect } from '../app/components/names';

function* mySaga() {
    yield all([
        ...namesEffect
    ])
}

export default mySaga;
