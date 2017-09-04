import { takeLatest } from "redux-saga";
import { fork } from "redux-saga/effects";
import { searchFetchList } from "./search";

// main saga generators
export function* sagas() {
  yield [
    fork(takeLatest, 'SEARCH', searchFetchList),
  ];
}
