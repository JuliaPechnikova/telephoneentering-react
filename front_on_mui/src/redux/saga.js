import {takeEvery, put, call} from 'redux-saga/effects';
import {FETCH_NUMBERS, REQUEST_NUMBERS} from './types';
import {hideLoader, showAlert, showLoader} from './actions';

export function* sagaWatcher() {
  yield takeEvery(REQUEST_NUMBERS, sagaWorker);
}

function* sagaWorker() {
  try {
    yield put(showLoader())
    const payload = yield call(fetchNumbers)
    yield put({ type: FETCH_NUMBERS, payload })
    yield put(hideLoader())
  } catch (e) {
    yield put(showAlert('Что-то пошло не так'))
    yield put(hideLoader())
  }
}

async function fetchNumbers() {
  const response = await fetch('http://localhost:3002/telephone');
  return await response.json();
}