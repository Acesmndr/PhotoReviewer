import { all } from 'redux-saga/effects';
import { getImage } from './approver.saga';

export default function* rootSaga() {
  yield all([
    getImage(),
  ])
};
