import { all } from 'redux-saga/effects'
import { watchUserActions } from './user'

export default function* rootSaga() {
	yield all([
		watchUserActions(),
	])
}